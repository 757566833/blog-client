import React from 'react';
import { withRouter } from 'react-router-dom';
import Vcode from 'react-vcode';
import Control from '../../control/components/Header';
import { Button, Input, Modal, message } from 'antd';
const Search = Input.Search;
import './style.less';
export let HeaderRef;
class Header extends React.Component {
    constructor(props) {
        super(props);
        HeaderRef = this;
        this.isMount = true;
        this.vcode = React.createRef();
    }

    state = {
        loginVisible: false,
        registerVisible: false,

        Vcode: '',

        inputVcode: '',
        user: '',
        password: '',
    }
    componentDidMount = () => {
        if (localStorage.token) {
            this.props.setIsLogin(true);
        }
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    showLoginModal = () => {
        this.setState({
            loginVisible: true,
        });
    }

    loginHandleOk = (e) => {
        console.log(e);
        this.setState({
            loginVisible: false,
        });
    }

    loginHandleCancel = (e) => {
        console.log(e);
        this.setState({
            loginVisible: false,
            inputVcode: '',
            user: '',
            password: '',
        });
    }
    showRegisterModal = () => {
        this.setState({
            registerVisible: true,
        });
    }

    registerHandleOk = (e) => {
        console.log(e);
        this.setState({
            registerVisible: false,
        });
    }

    registerHandleCancel = (e) => {
        console.log(e);
        this.setState({
            registerVisible: false,
            inputVcode: '',
            user: '',
            password: '',
        });
    }

    setVcode = (Vcode) => {
        this.setState({
            Vcode: Vcode
        });
    }
    setUser = (e) => {
        this.setState({
            user: e.target.value.trim().replace(/\W/g, '')
        });
    }

    setPassword = (e) => {
        this.setState({
            password: e.target.value.trim().replace(/\W/g, '')
        });
    }

    setInputVcode = (e) => {
        this.setState({
            inputVcode: e.target.value
        });
    }

    setToken = (token, user, admin) => {
        localStorage.token = token;
        this.props.setIsLogin(true);
        this.setState({
            loginVisible: false,
            registerVisible: false,
            inputVcode: '',
            user: '',
            password: '',
        });
        localStorage.user = user;
        console.log(admin);
        if (admin.isAdmin) {
            localStorage.isAdmin = admin.isAdmin;
        }

    }
    register = () => {
        const {
            Vcode,
            user,
            password,
            inputVcode
        } = this.state;
        if (Vcode == inputVcode) {
            Control.register({ user, password });
        } else {
            this.VcodeError();
            this.vcode.current.onClick();
        }

    }
    login = () => {
        const {
            Vcode,
            user,
            password,
            inputVcode
        } = this.state;
        if (Vcode == inputVcode) {
            Control.login({ user, password });
        } else {
            this.VcodeError();
            this.vcode.current.onClick();
        }
    }
    VcodeError = () => {
        message.error('验证码错误');
    }
    logout = () => {
        localStorage.token = '';
        this.props.setIsLogin(false);
    }
    search = (value) => {
        this.props.setSearch(value);
        this.props.setListShouldUpdateState(true);
    }
    interfaceError = (msg) => {
        message.error(`接口错误，错误信息${msg}`);
        this.vcode.current.onClick();
    }
    networkError = (code) => {
        message.error(`网络错误${code}`);
    }
    render() {
        const isLogin = this.props.isLogin;
        const {
            loginVisible,
            registerVisible,
            user,
            password,
            inputVcode
        } = this.state;
        const isAdmin = localStorage.isAdmin;
        return (
            <div className='Header flex'>
                <div className='content flex'>
                    <div className='title'>方舟 代码</div>
                    <Modal
                        title='登录'
                        visible={loginVisible}
                        onOk={this.loginHandleOk}
                        onCancel={this.loginHandleCancel}
                        footer={null}
                        className='modal'
                        destroyOnClose={true}
                    >
                        <Input addonBefore='账号' value={user} onChange={this.setUser} />
                        <Input type='password' addonBefore='密码' value={password} onChange={this.setPassword} />
                        <div className='flex Vcode'>
                            <Vcode
                                length={4}
                                onChange={(v) => { this.setVcode(v); }}
                                ref={this.vcode}
                                width={160}
                            />
                            <Input className='inputVcode' value={inputVcode} onChange={this.setInputVcode} />
                        </div>
                        <div className='flex buttons'>
                            <Button onClick={this.loginHandleCancel}>取消</Button>
                            <Button type='primary' onClick={this.login}>确认</Button>
                        </div>

                    </Modal>
                    <Modal
                        title='注册'
                        visible={registerVisible}
                        onOk={this.registerHandleOk}
                        onCancel={this.registerHandleCancel}
                        footer={null}
                        className='modal'
                        destroyOnClose={true}
                    >
                        <Input addonBefore='账号' value={user} onChange={this.setUser} />
                        <Input type='password' addonBefore='密码' value={password} onChange={this.setPassword} />
                        <div className='flex Vcode'>
                            <Vcode
                                length={4}
                                width={160}
                                onChange={(v) => { this.setVcode(v); }}
                                ref={this.vcode}
                            />
                            <Input className='inputVcode' value={inputVcode} onChange={this.setInputVcode} />
                        </div>

                        <div className='flex buttons'>
                            <Button onClick={this.registerHandleCancel}>取消</Button>
                            <Button type='primary' onClick={this.register}>确认</Button>
                        </div>
                    </Modal>
                    <Search
                        placeholder='input search text'
                        onSearch={value => this.search(value)}
                        enterButton
                        className='search'
                    />
                    {isLogin
                        ?
                        <div className='flex buttons'>
                            <Button type='primary' shape='round' onClick={() => { window.open('/WriteView'); }}>
                                写文章
                            </Button>
                            {isAdmin
                                ?
                                <Button type='primary' shape='round' onClick={() => { window.open('/SettingView'); }}>
                                    设置
                                </Button>
                                : ''
                            }

                            <Button shape='round' onClick={this.logout}>退出</Button>
                        </div>
                        :
                        <div className='buttons flex'>

                            <Button type='primary' shape='round' onClick={this.showLoginModal} >登录</Button>

                            <Button shape='round' onClick={this.showRegisterModal} >注册</Button>
                        </div>
                    }

                </div>

            </div>
        );
    }
}
export default withRouter(Header);
