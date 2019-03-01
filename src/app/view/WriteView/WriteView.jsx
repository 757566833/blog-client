import WriteView_cmpt  from './WriteView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

WriteView_cmpt.propTypes = {

};
const WriteView = connect(
    mapStateToProps,
    mapDispatchToProps
)(WriteView_cmpt);
export default WriteView;