import React from 'react';
import { withRouter } from 'react-router-dom';
import Control from '../../control/components/Setting';
import { Button, Input, Tag, message } from 'antd';
export let SettingRef;
class Setting extends React.Component {
    constructor(props) {
        super(props);
        SettingRef = this;
        this.isMount = true;
    }
    state = {
        tab: '',
        font: '',
        tabs: []
    }
    componentDidMount = () => {
        Control.getTabs();
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    addTab = () => {
        const { tab, font } = this.state;
        Control.addTab({ tab, font });
    }
    setTabs = (tabs) => {
        if (this.isMount) {
            this.setState({
                tabs: tabs
            });
        }
    }
    addTabSuccess = (msg) => {
        message.info(msg);
        Control.getTabs();
    }
    setTab = (e) => {
        this.setState({
            tab: e.target.value
        });
    }
    setFont = (e) => {
        this.setState({
            font: e.target.value
        });
    }
    deleteTab = (e, item) => {
        Control.deleteTab(item, e);
    }
    deleteSuccess = (msg) => {
        message.info(msg);
    }
    deleteError = (e) => {
        e.preventDefault();
    }
    interfaceError = (msg) => {
        message.error(`接口错误，错误信息${msg}`);
    }
    networkError = (code) => {
        message.error(`网络错误${code}`);
    }
    render() {
        const { tab, font, tabs } = this.state;
        return (
            <div className='Setting'>
                <Input value={tab} placeholder='tab' onChange={this.setTab} />
                <Input value={font} placeholder='font' onChange={this.setFont} />
                <Button onClick={this.addTab}>添加</Button>
                <div>
                    {tabs.map((item) => {
                        return (
                            <Tag closable onClose={(e) => { this.deleteTab(e, item); }} key={item.tab}>{item.tab}</Tag>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default withRouter(Setting);
