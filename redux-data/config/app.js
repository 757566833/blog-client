const {
    isLoginState,
    setIsLogin,

    searchState,
    setSearch,

    listShouldUpdateState,
    setListShouldUpdateState
} = require('../data/app/app')
module.exports = {
    'app': {
        'index': {
            'state': [],
            'func': []
        },
        'components': {
            'Svg': {
                'state': [],
                'func': [],
            },
            'Header': {
                'state': [isLoginState, searchState],
                'func': [setIsLogin, setSearch, setListShouldUpdateState]
            },
            'ArticleList': {
                'state': [searchState,listShouldUpdateState],
                'func': [setListShouldUpdateState]
            },
            'Article':{
                'state': [],
                'func': []
            },
            'Write': {
                'state': [],
                'func': []
            },
            'Examine': {
                'state': [],
                'func': []
            },
            'Setting':{
                'state': [],
                'func': []
            }
        },
        'views': {
            'IndexView': {
                'components': ['Header', 'ArticleList'],
                'state': [],
                'func': []
            },
            'ArticleView':{
                'components': ['Article'],
                'state': [],
                'func': []
            },
            'WriteView': {
                'components': ['Write'],
                'state': [],
                'func': []
            },
            'ExamineView': {
                'components': ['Examine'],
                'state': [],
                'func': []
            },
            'SettingView': {
                'components': ['Setting'],
                'state': [],
                'func': []
            }
        }
    }

}