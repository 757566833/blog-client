import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/ExamineView';
import Examine from '../../components/Examine/Examine.jsx';
import { message } from 'antd';
export let ExamineViewRef;
class ExamineView extends React.Component {
    constructor(props) {
        super(props);
        ExamineViewRef = this;
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
                <Examine />
            </div>
        );
    }
}
export default withRouter(ExamineView);
