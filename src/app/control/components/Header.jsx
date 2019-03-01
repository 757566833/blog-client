import { HeaderRef } from '../../components/Header/Header_cmpt';
import registerModel from '../../model/register';
import loginModel from '../../model/login';
export default class Control {
    static async register(json) {
        const result = await registerModel(json);
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                HeaderRef.setToken(data.token);
            } else {
                HeaderRef.interfaceError(data.msg);
            }
        } else {
            HeaderRef.networkError(result);
        }
    }
    static async login(json) {
        const result = await loginModel(json);
        if (typeof result !== 'number') {
            let data = eval('(' + result + ')');
            if (data.code == 0) {
                HeaderRef.setToken(data.token,json.user);
            } else {
                HeaderRef.interfaceError(data.msg);
            }
        } else {
            HeaderRef.networkError(result);
        }
    }
}