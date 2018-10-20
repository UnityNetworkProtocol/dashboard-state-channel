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
    .then(web3 => {
      const c = new Connext({
        web3: web3,                       
        hubAddress: "0x7F2C856d4c995A5599C26f51FF58877966e57d92",
        hubUrl: "http://localhost:3000",
        contractAddress: "0xEcf923cE0b6D1A8c6A6d4a5eCa65De8B62B6f54a"
      })
      this.props.setConnext(() => c )

      web3.eth.getBalance('0xfe9B58284E3fFF74556493FA81dd7777d7f895dC')
      .then(r=> this.props.setBalanceEth(Web3.utils.fromWei(r)))
    } )
    .catch(r => console.log(r) )
    
  },
  componentDidUpdate(prevProps)
  {

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

const AccountBalance = withState(
  'balanceEth',
  'setBalanceEth', 
  0
)

const ChannelStake = withState(
  'balanceStake',
  'setBalance', 
  0
)


/* ----------------------------- Redux Form -------------------------------- */




/*-- Event Handlers ---*/

/* ----------------------------- Export -------------------------------- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  ConnextState,
  ChannelParticipants,
  AccountBalance,
  ChannelStake,
  QueryLifecycle,
)(Form);
