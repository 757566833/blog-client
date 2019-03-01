import { ArticleRef } from '../../components/Article/Article_cmpt';
import articleModel from '../../model/get/article';
export default class Control {
    static async article(json) {
        const result = await articleModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                ArticleRef.setResult(data.data);
            } else {
                ArticleRef.interfaceError(data.msg);
            }
        } else {
            ArticleRef.networkError(result);
        }
    }
}