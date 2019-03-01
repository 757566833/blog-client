import Examine_cmpt  from './Examine_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Examine_cmpt.propTypes = {

};
const Examine = connect(
    mapStateToProps,
    mapDispatchToProps
)(Examine_cmpt);
export default Examine;