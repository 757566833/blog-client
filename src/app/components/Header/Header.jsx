import Header_cmpt  from './Header_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Header_cmpt.propTypes = {
    isLogin:PropTypes.bool.isRequired,
    search:PropTypes.string.isRequired,
    setIsLogin:PropTypes.func.isRequired,
    setSearch:PropTypes.func.isRequired,
    setListShouldUpdateState:PropTypes.func.isRequired,

};
const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header_cmpt);
export default Header;