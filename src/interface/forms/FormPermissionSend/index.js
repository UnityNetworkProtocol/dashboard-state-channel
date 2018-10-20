/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Verifier } from "contracts";
import { fromEthers } from 'store/departments/selectors'
import ethers from 'store/departments/ethers/actions'
import { createValidator, required } from 'logic/forms/validation'
import Form from './form'

/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.contractCreate();
  },
  componentDidUpdate(prevProps)
  {
    // this.props.statusPermissions && true
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  data: fromEthers.getDeltaData(state, `sign|permission`),
  statusPermissions: fromEthers.getDeltaStatus(state, `sign|permission`),
})


const mapDispatchToProps = (dispatch, props) => ({
  signMessage: (ethAddress, ethPermission)=>dispatch(ethers.walletSignMessage('REQUEST')(
    {
      ethAddress,
      ethPermission
    },
    {
      delta: 'sign|permission',
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )),
  sendTransactions: (params)=>dispatch(ethers.walletSign('REQUEST')(
    {
      contractName: props.contractName,
      contractFunction: "isInividual",
      contractParams: [
        ...params
      ],
    },
    {
      delta: `contract|${props.contractName}|${props.contractAddress}|sign`,
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )), 
  contractCreate: ()=>dispatch(ethers.contractCreate('REQUEST')(
    {
      ethAddress: props.contractAddress,
      ethAbi: Verifier.abi,
      contractName: props.contractName
    },
    {
      delta: `contract|${props.contractName}|${props.contractAddress}|create`,
      network: {
        provider: 'default',
        chain: props.chain || 'rinkeby',
      }
    }
  )), 
  reset: ()=>dispatch(reset('FormCreatePermission'))
})


/* ----------------------------- Redux Form -------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  console.log('submitting')
  try {
    console.log(data)
    props.sendTransactions(
      [
        data.permissionMessage, 
        data.permissionSignature,
        data.permissionV,
        data.permissionR,
        data.permissionS,
    ]
    );
    

  } catch(err) {
    console.log(err)
  }
  console.log('submitting 2')
})

const validate = createValidator({
  'ethAddress': required,
  'ethPermission': required,
})

const config = {
  form: 'FormCreatePermission',
  fields: [
    'networkDefault',
  ],
  destroyOnUnmount: true,
  onSubmit,
  // validate
}

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(Form);