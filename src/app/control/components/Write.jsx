import { WriteRef } from '../../components/Write/Write_cmpt';
import addArticleModel from '../../model/post/article';
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
}