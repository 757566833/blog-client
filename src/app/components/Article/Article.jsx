import Article_cmpt  from './Article_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Article_cmpt.propTypes = {

};
const Article = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article_cmpt);
export default Article;