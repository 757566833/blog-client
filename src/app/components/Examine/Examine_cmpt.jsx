import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Examine';
import marked from 'marked';
import { message } from 'antd';
import './style.less';
export let ExamineRef;
class Examine extends React.Component {
    constructor(props) {
        super(props);
        ExamineRef = this;
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
        const show = sessionStorage.text;
        return (
            <div className='Examine flex'>
                {show ? <div className='markdown-section' dangerouslySetInnerHTML={{ __html: marked(show) }}></div> : ''}
            </div>
        );
    }
}
export default withRouter(Examine);
