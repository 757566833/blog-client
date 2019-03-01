import Svg_cmpt  from './Svg_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Svg_cmpt.propTypes = {

};
const Svg = connect(
    mapStateToProps,
    mapDispatchToProps
)(Svg_cmpt);
export default Svg;