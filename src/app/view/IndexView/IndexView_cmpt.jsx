import React from 'react';
// import Control from '../../control/view/IndexView';
import Header from '../../components/Header/Header.jsx';
import ArticleList from '../../components/ArticleList/ArticleList.jsx';
import { message } from 'antd';
export let IndexViewRef;
export default class IndexView extends React.Component {
    constructor(props) {
        super(props);
        IndexViewRef = this;
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    interfaceError = (msg) => {
        message.error(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        message.error(`网络错误${code}`);
    }
    render() {
        return (
            <div>
                <Header />
                <ArticleList />
            </div>
        );
    }
}
