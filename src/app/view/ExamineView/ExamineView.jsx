import ExamineView_cmpt  from './ExamineView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

ExamineView_cmpt.propTypes = {

};
const ExamineView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExamineView_cmpt);
export default ExamineView;