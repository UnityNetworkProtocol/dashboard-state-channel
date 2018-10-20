/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, change } from 'redux-form'
import Connext from "connext"
import {utils} from 'ethers';
import Web3 from "web3"
import getWeb3 from "./utils/getWeb3";
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
import Form from './component'
import ConnextService from 'services/Connext'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

    getWeb3()
    .then(web3Stuff => {
      const c = new Connext({
        web3: web3Stuff,                       
        hubAddress: "0x7F2C856d4c995A5599C26f51FF58877966e57d92",
        hubUrl: "http://localhost:3000",
        contractAddress: "0xEcf923cE0b6D1A8c6A6d4a5eCa65De8B62B6f54a"
      })
      this.props.setConnext(() => c )
    } )
    .catch(r => console.log(r) )
    
  },
  componentDidUpdate(prevProps)
  {
    console.log(this.props);
    if (this.props.connext) {
      getMyChannel(this.props.connext, this.props.setChannel, this.props.setBalance)
      populateAddresses(
        this.props.connext,
        '0xfe9B58284E3fFF74556493FA81dd7777d7f895dC',
        this.props.setParticipants
      )
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({

})


const mapDispatchToProps = (dispatch, props) => ({

})

const ConnextState = withState(
  'connext',
  'setConnext', 
  {
    weiBalanceA: 'de0b6b3a7640000'
  }
)

const ChannelParticipants = withState(
  'participants',
  'setParticipants', 
  []
)

const ChannelInformation = withState(
  'channel',
  'setChannel', 
  []
)

const ChannelStake = withState(
  'balance',
  'setBalance', 
  0
)


/* ----------------------------- Redux Form -------------------------------- */
const populateAddresses = async (connext, account, setParticipants ) => {
  try {
    const allChannels = await connext.getAllChannels();
    const targetAddresses = allChannels
      .filter(channel => {
        return (
          channel.partyI.toLowerCase() === connext.hubAddress.toLowerCase() &&
          channel.partyA.toLowerCase() !== account.toLowerCase()
        );
      })
      .map(channel => channel.partyA);
    setParticipants(targetAddresses)
  } catch (e) {
    console.error(`Problem getting channels: ${e.toString()}`);
  }
};

const getMyChannel = async (connext, setChannel, setBalance) => {
  const myChannel = await connext.getChannelByPartyA('0x1e262c8fc7984f36cd7ff89db90324e0579ebd00');
  // console.log(utils.bigNumberify("de0b6b3a7640000"))
  setBalance(Web3.utils.fromWei(Web3.utils.toBN(`0x${myChannel.weiBalanceA}`)))
  setChannel(myChannel)
};



const PayChannel = async(props) => {
  // channel update intended
  // console.log(`Creating channel payment details..`);
  // const updateWeiBalanceA = Web3.utils
  //   .toBN(`0x${channel.weiBalanceA}`)
  //   .sub(weiPayment);

  // const updateWeiBalanceB = Web3.utils
  //   .toBN(`0x${channel.weiBalanceI}`)
  //   .add(weiPayment);

  // await connext.updateChannel({
  //   channelId: channel.channelId,
  //   balanceA: { weiDeposit: updateWeiBalanceA },
  //   balanceB: { weiDeposit: updateWeiBalanceB }
  // });
}

const doPayment = async( connext, account, targetAccount, payment, channel ) => {

  const weiPayment = Web3.utils.toBN(
    Web3.utils.toWei(payment.toString(), "ether")
  );

  if (targetAccount.toLowerCase() === connext.hubAddress.toLowerCase()) {
 
  } else {
    // thread update intended
    let ourThread = await connext.getThreadByParties({
      partyA: account.toLowerCase(),
      partyB: targetAccount.toLowerCase()
    });

    console.log("ourThread: ", ourThread);

    if (
      !ourThread ||
      ourThread.status === "SETTLED" ||
      ourThread.length === 0
    ) {
      // try creating a thread
      const threadId = await connext.openThread({
        to: targetAccount.toLowerCase(),
        sender: account.toLowerCase(),
        deposit: { weiDeposit: weiPayment }
      });
      ourThread = await connext.getThreadById(threadId);
    }

    console.log("ourThread: ", ourThread);
    const updateWeiBalanceA = Web3.utils
      .toBN(`0x${ourThread.weiBalanceA}`)
      .sub(weiPayment);

    const updateWeiBalanceB = Web3.utils
      .toBN(`0x${ourThread.weiBalanceB}`)
      .add(weiPayment);

    console.log("ourThread.threadId: ", ourThread.threadId);
    await connext.updateThread({
      threadId: ourThread.threadId,
      balanceA: { weiDeposit: updateWeiBalanceA },
      balanceB: { weiDeposit: updateWeiBalanceB }
    });

    console.log("ourThread.threadId: ", ourThread.threadId);
    await connext.closeThread(ourThread.threadId);
    // await getMyChannel(channel.channelId);
}
}




/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const account = '0xfe9B58284E3fFF74556493FA81dd7777d7f895dC'
  doPayment(
    props.connext,
    account,
    data.transactionParticipant,  
    data.transactionAmount,
    1000000000000,
    props.channel
  )
})
.catch(err => console.log(err))

// const doPayment = async( connext, account, targetAccount, payment, channel ) => {

const validate = createValidator({
  'contactEmail': required,
})

const config = {
  form: 'FormSettingsGeneral',
  fields: [
    'networkDefault',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ConnextState,
  ChannelParticipants,
  ChannelInformation,
  ChannelStake,
  FormConfiguration,
  QueryLifecycle,
)(Form);
