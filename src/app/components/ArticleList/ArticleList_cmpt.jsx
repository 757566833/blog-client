import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/ArticleList';
import Svg from '../Svg/Svg';
import { List, Icon, Menu, message } from 'antd';
import './style.less';
export let ArticleListRef;
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        ArticleListRef = this;
        this.isMount = true;
    }
    state = {
        current: 'javascript',
        articleList: [],
        tabs: [],
        isLoading: true
    }
    componentDidMount = () => {

        Control.getTabs();
    }
    shouldComponentUpdate = (nextProps) => {
        if (this.props.listShouldUpdate == false && nextProps.listShouldUpdate == true) {
            const { current } = this.state;
            const search = nextProps.search;
            Control.articleList({ type: current, search: search });
        }
        return true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    setArticleList = (articleList) => {
        if (this.isMount) {
            this.setState({
                articleList: articleList,
                isLoading: false
            });
        }
        this.props.setListShouldUpdateState(false);
    }
    setTabs = (tabs) => {
        if (this.isMount) {
            this.setState({
                tabs: tabs,
                current: tabs[0].tab,
            });
            Control.articleList({ type: tabs[0].tab });
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
            isLoading: true
        });
        const current = e.key;
        const search = this.props.search;
        Control.articleList({ type: current, search: search });
    }
    interfaceError = (msg) => {
        message.error(`接口错误，错误信息${msg}`);
        this.setState({
            isLoading:false
        });
    }
    networkError = (code) => {
        message.error(`网络错误${code}`);
        this.setState({
            isLoading:false
        });
    }
    render() {
        const { current, articleList, tabs, isLoading } = this.state;
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );
        return (
            <div className='ArticleList flex' style={{ minHeight: document.documentElement.clientHeight - 64 - 64 }}>
                <div className='content'>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[current]}
                        mode='horizontal'
                    >
                        {tabs.map((item) => {
                            return (
                                <Menu.Item key={item.tab}>
                                    <div className='flex'>
                                        <Svg type={item.font} className={`iconfont ${item.font}`} />
                                        <span>{item.tab}</span>
                                    </div>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                    <List
                        itemLayout="vertical"
                        size="large"
                        loadMore={<div>loadmore</div>}
                        dataSource={articleList}
                        loading={isLoading}
                        renderItem={(item, index) => (
                            <List.Item
                                key={item._id}
                                actions={[<IconText key={index} type="star-o" text="0" />, <IconText key={index} type="like-o" text="0" />, <IconText type="message" key={index} text="0" />]}
                                // extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                                onClick={() => window.open(`/ArticleView/${item._id}`)}
                            >
                                {/* <a href={`/Article?_id=${item._id}`}></a> */}
                                <List.Item.Meta
                                    // avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={`作者：${item.author}    ${item.updateAt?`更新于${item.updateAt}`:`创作于${item.createdAt}`}`}
                                />
                                {item.summary}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
export default withRouter(ArticleList);
