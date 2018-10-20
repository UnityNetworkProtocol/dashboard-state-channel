/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'

/*---*--- Ethers :: Assimilation ---*---*/
import ethers from 'store/departments/ethers/actions'
/* ------------------------------- Container -------------------------------- */
/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  /*--- Did Mount :: Component ---*/
  componentDidMount()
  {

    const payload = {
      url: '127.0.0.1:7545',
    }

    this.props.ethersNewProviderJsonRpcRequest({
      payload
    })

  },

  /*--- Did Update :: Component ---*/
  componentDidUpdate(prevProps)
  {

  }

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({
  ethersNewProviderJsonRpcRequest: settings => dispatch(ethers.providerJsonRpc('REQUEST')(
    {
      url: 'http://127.0.0.1:7545/',
    },
    {
      delta: `provider|json`,
      network: {
        provider: 'json',
        chain: props.chain || 'homestead',
      }
    }
    )),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(Component);
