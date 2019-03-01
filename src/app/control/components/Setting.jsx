import { SettingRef } from '../../components/Setting/Setting_cmpt';
import addTabModel from '../../model/post/tab';
import getTabsModel from '../../model/get/tabs';
import deleteTabModel from '../../model/delete/tab';
export default class Control {
    static async addTab(json) {
        const result = await addTabModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                SettingRef.addTabSuccess(data.msg);
            } else {
                SettingRef.interfaceError(data.msg);
            }
        } else {
            SettingRef.networkError(result);
        }
    }
    static async getTabs() {
        const result = await getTabsModel();
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                SettingRef.setTabs(data.data);
            } else {
                SettingRef.interfaceError(data.msg);
            }
        } else {
            SettingRef.networkError(result);
        }
    }
    static async deleteTab(json,e) {
        const result = await deleteTabModel(json);
        if (typeof result !== 'number') {
            let data = eval(`(${result})`);
            if (data.code == 0) {
                SettingRef.deleteSuccess(data.msg);
            } else {
                SettingRef.deleteError(e);
                SettingRef.interfaceError(data.msg);
            }
        } else {
            SettingRef.networkError(result);
        }
    }
}