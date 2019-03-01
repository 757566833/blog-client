
const action = {
    setIsLogin: (isLogin) => {
        return { type: 'Header', func: 'setIsLogin', isLogin: isLogin };
    },
    setSearch: (search) => {
        return { type: 'Header', func: 'setSearch', search: search };
    },
    setListShouldUpdateState: (listShouldUpdate) => {
        return { type: 'Header', func: 'setListShouldUpdateState', listShouldUpdate: listShouldUpdate };
    },

};
export default action;