const username = 'username'
const usernameState = {
    'name': username,
    'type': 'string',
    'default': 'user'
}
const setUsername = {
    'method': 'setUsername',
    'parameter': username
}

const listShouldUpdate = 'listShouldUpdate'
const listShouldUpdateState = {
    'name': listShouldUpdate,
    'type': 'bool',
    'default': false
}
const setListShouldUpdateState = {
    'method': 'setListShouldUpdateState',
    'parameter': listShouldUpdate
}

const search = 'search';
const searchState = {
    'name': search,
    'type': 'string',
    'default': ''
};
const setSearch = {
    'method': 'setSearch',
    'parameter': search
};

const isLogin = 'isLogin';
const isLoginState = {
    'name': isLogin,
    'type': 'bool',
    'default': false
};
const setIsLogin = {
    'method': 'setIsLogin',
    'parameter': isLogin
};


module.exports = {
    isLoginState,
    setIsLogin,

    searchState,
    setSearch,

    listShouldUpdateState,
    setListShouldUpdateState
};