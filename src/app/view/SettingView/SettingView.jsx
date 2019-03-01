import SettingView_cmpt  from './SettingView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

SettingView_cmpt.propTypes = {

};
const SettingView = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingView_cmpt);
export default SettingView;