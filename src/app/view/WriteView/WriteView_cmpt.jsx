import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/WriteView';
import Write from '../../components/Write/Write.jsx';
import { message } from 'antd';
export let WriteViewRef;
class WriteView extends React.Component {
    constructor(props) {
        super(props);
        WriteViewRef = this;
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
                <Write />
            </div>
        );
    }
}
export default withRouter(WriteView);
