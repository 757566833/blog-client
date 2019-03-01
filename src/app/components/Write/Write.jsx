import Write_cmpt  from './Write_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Write_cmpt.propTypes = {

};
const Write = connect(
    mapStateToProps,
    mapDispatchToProps
)(Write_cmpt);
export default Write;