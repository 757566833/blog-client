import { ArticleListRef } from '../../components/ArticleList/ArticleList_cmpt';
import articleListModel from '../../model/get/articleList';
import getTabsModel from '../../model/get/tabs';
export default class Control {
    static async articleList(json) {
        const result = await articleListModel(json);
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                ArticleListRef.setArticleList(data.data);
            } else {
                ArticleListRef.interfaceError(data.msg);
            }
        } else {
            ArticleListRef.networkError(result);
        }
    }
    static async getTabs() {
        const result = await getTabsModel();
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                ArticleListRef.setTabs(data.data);
            } else {
                ArticleListRef.interfaceError(data.msg);
            }
        } else {
            ArticleListRef.networkError(result);
        }
    }
}