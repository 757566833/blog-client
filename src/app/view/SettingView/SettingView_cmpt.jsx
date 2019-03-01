import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/view/SettingView';
import Setting from '../../components/Setting/Setting.jsx';

export let SettingViewRef;
class SettingView extends React.Component {
    constructor(props) {
        super(props);
        SettingViewRef = this;
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
                <Setting />
            </div>
        );
    }
}
export default withRouter(SettingView);
