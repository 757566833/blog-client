import Setting_cmpt  from './Setting_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Setting_cmpt.propTypes = {

};
const Setting = connect(
    mapStateToProps,
    mapDispatchToProps
)(Setting_cmpt);
export default Setting;