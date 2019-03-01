const reducer = (state, action) => {
    switch (action.type) {
        case 'Svg':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Header':
            switch (action.func) {
                case 'setIsLogin':
                    return {
                        ...state,
                        isLogin: action.isLogin
                    };
                case 'setSearch':
                    return {
                        ...state,
                        search: action.search
                    };
                case 'setListShouldUpdateState':
                    return {
                        ...state,
                        listShouldUpdate: action.listShouldUpdate
                    };
                default:
                    return state;
            }
        case 'ArticleList':
            switch (action.func) {
                case 'setListShouldUpdateState':
                    return {
                        ...state,
                        listShouldUpdate: action.listShouldUpdate
                    };
                default:
                    return state;
            }
        case 'Article':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Write':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Examine':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'Setting':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'IndexView':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'ArticleView':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'WriteView':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'ExamineView':
            switch (action.func) {
                
                default:
                    return state;
            }
        case 'SettingView':
            switch (action.func) {
                
                default:
                    return state;
            }
        
        default:
            return state;
    }
};
export default reducer;

