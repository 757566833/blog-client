import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/ArticleView';
import Article from '../../components/Article/Article.jsx';

export let ArticleViewRef;
class ArticleView extends React.Component {
    constructor(props) {
        super(props);
        ArticleViewRef = this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        return (
            <div>
                <Article />
            </div>
        );
    }
}
export default withRouter(ArticleView);
