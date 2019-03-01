import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLogin: (isLogin) => dispatch(action.setIsLogin(isLogin)),
        setSearch: (search) => dispatch(action.setSearch(search)),
        setListShouldUpdateState: (listShouldUpdate) => dispatch(action.setListShouldUpdateState(listShouldUpdate)),

    };
};
export default mapDispatchToProps;