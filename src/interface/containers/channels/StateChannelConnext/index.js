/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, change } from 'redux-form'
import Connext from "connext"
import Web3 from "web3"
import getWeb3 from "./utils/getWeb3";
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
import Form from './component'

/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

    getWeb3()
    .then(web3Stuff => {
      console.log('web3ss', web3Stuff)
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
    console.log('updating props')
    console.log(this.props)
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
  {}
)


/* ----------------------------- Redux Form -------------------------------- */
const doDeposit = async (connext) => {
  // *** Call openChannel on connext client with deposit ***
  try {
    // const { accounts, deposit, connext } = this.state;
    // this.setState({ isWaiting: true });

    const weiDeposit = Web3.utils.toBN(
      Web3.utils.toWei("1", "ether")
    );

    // const web3 = await getWeb3();
    // console.log(web3)
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts)
    const challenge = 3600;

    console.log(`Creating channel with weiDeposit: ${weiDeposit.toString()}`);

    console.log(connext)
    let channelId = await connext.openChannel({
      initialDeposits: { weiDeposit },
      challenge,
      sender: '0xfe9B58284E3fFF74556493FA81dd7777d7f895dC'
    });

    console.log(`Opened channel with hub: ${channelId}`);
    // this.setState({ channelId, deposit });
  } catch (error) {
    alert(`Deposit failed. Check console for details.`);
    console.log(error);
  }
};

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  // const web3 = getWeb3().then(r => console.log(r) );
  doDeposit(props.connext);
})

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
  FormConfiguration,
  QueryLifecycle,
)(Form);