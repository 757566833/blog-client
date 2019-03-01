import ArticleView_cmpt  from './ArticleView_cmpt.jsx';
// import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

ArticleView_cmpt.propTypes = {

};
const ArticleView = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleView_cmpt);
export default ArticleView;