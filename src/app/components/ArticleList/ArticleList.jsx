import ArticleList_cmpt  from './ArticleList_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

ArticleList_cmpt.propTypes = {
    search:PropTypes.string.isRequired,
    listShouldUpdate:PropTypes.bool.isRequired,
    setListShouldUpdateState:PropTypes.func.isRequired,

};
const ArticleList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList_cmpt);
export default ArticleList;