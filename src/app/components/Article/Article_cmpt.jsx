import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/Article';
import marked from 'marked';
import './style.less';
export let ArticleRef;
class Article extends React.Component {
    constructor(props) {
        super(props);
        ArticleRef = this;
        this.isMount = true;
    }
    state = {
        author: '',
        createdAt: '',
        subTitle: '',
        summary: '',
        text: '',
        title: '',
        type: '',
        _id: '',
    }
    componentDidMount = () => {
        Control.article({ _id: this.props.match.params._id });
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    setResult = (result) => {
        this.setState({
            ...result
        });
    }
    interfaceError = (msg) => {
        alert(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        alert(`网络错误${code}`);
    }
    render() {
        const {

            author,
            createdAt,
            text,
            title,
            type,
        } = this.state;
        const _id = this.props.match.params._id;
        return (
            <div className='Article flex'>
                <div className='content markdown-section'>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: marked(title) }}></div>
                    </div>
                    <div className='flex'>
                        <div dangerouslySetInnerHTML={{ __html: marked(author) }}></div>
                        <div dangerouslySetInnerHTML={{ __html: marked(createdAt) }}></div>
                        <div dangerouslySetInnerHTML={{ __html: marked(type) }}></div>
                        <div>{localStorage.user == author ? <div onClick={()=>global.open(`/WriteView/${_id}`)}>修改</div> : ''}</div>
                    </div>
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
                    </div>
                </div>

            </div>
        );
    }
}
export default withRouter(Article);
