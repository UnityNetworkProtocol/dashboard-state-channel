/* --- Global Dependencies --- */
import { connect } from "react-redux";
import { compose, lifecycle, withState } from "recompose";
/* --- Local Dependencies --- */

/* --- Module Dependencies --- */
import Component from "./component";

/* ------- React Container ------- */

/* --- Store State --- */
const mapStateToProps = (state, props) => ({

});

/* --- Store Distpach --- */
const mapDispatchToProps = (dispatch, props) => ({
 
});

/* --- Lifecycle --- */
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
});

/* --- Lifecycle State --- */
const LifecyleExample = withState(
  "example",
  "exampleToggle",
  true
);


/* --- Export --- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  LifecyleExample,
  QueryLifecycle,
)(Component);
