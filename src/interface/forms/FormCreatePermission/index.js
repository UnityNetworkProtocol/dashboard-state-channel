/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, reset } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromEthers } from 'store/departments/selectors'
import ethers from 'store/departments/ethers/actions'
import { createValidator, required } from 'logic/forms/validation'
import Form from './form'
console.log(fromEthers)
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  data: fromEthers.getDeltaData(state, `sign|permission`),
  status: fromEthers.getDeltaStatus(state, `sign|permission`),
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
  reset: ()=>dispatch(reset('FormCreatePermission'))
})


/* ----------------------------- Redux Form -------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  console.log('submitting')
  try {
    props.signMessage(data.ethAddress, data.ethPermission);
    

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