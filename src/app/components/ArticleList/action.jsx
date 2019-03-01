
const action = {
    setListShouldUpdateState: (listShouldUpdate) => {
        return { type: 'ArticleList', func: 'setListShouldUpdateState', listShouldUpdate: listShouldUpdate };
    },

};
export default action;