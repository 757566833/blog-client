import { WriteRef } from '../../components/Write/Write_cmpt';
import addArticleModel from '../../model/post/article';
import getTabsModel from '../../model/get/tabs';
import articleModel from '../../model/get/article';
import putArticleModel from '../../model/put/article';
export default class Control {
    static async addArticle(json) {
        const result = await addArticleModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                WriteRef.saveSuccess(data.msg);
            } else {
                WriteRef.interfaceError(data.msg);
            }
        } else {
            WriteRef.networkError(result);
        }
    }
    static async getTabs() {
        const result = await getTabsModel();
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                WriteRef.setTabs(data.data);
            } else {
                WriteRef.interfaceError(data.msg);
            }
        } else {
            WriteRef.networkError(result);
        }
    }
    static async article(json) {
        const result = await articleModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                WriteRef.setResult(data.data);
            } else {
                WriteRef.interfaceError(data.msg);
            }
        } else {
            WriteRef.networkError(result);
        }
    }
    static async updateArticle(json) {
        const result = await putArticleModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                WriteRef.updateSuccess(data.data);
            } else {
                WriteRef.interfaceError(data.msg);
            }
        } else {
            WriteRef.networkError(result);
        }
    }
}