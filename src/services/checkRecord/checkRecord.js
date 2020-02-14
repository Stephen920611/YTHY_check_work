/**
 * @description
 * @Version Created by Stephen on 2019/8/12.
 * @Author Stephen
 * @license dongfangdianzi
 */
import EnumAPI from './../../constants/EnumAPI';
import {postJSON, post, get,del,put} from './../../utils/core/requestTj';
import T from './../../utils/T';

//信息录入
export async function addInfo(params = {}) {
    return postJSON(EnumAPI.addInfo, params);
    // return post(EnumAPI.addInfo, params);
}
//编辑信息录入
export async function updateInfo(params = {}) {
    return put(EnumAPI.updateInfo, params);
}
export async function deleteInfo(id) {
    return del(EnumAPI.deleteInfo(id));
}
//获取详情
export async function fetchDetailInfo(id) {
    return get(EnumAPI.fetchDetailInfo(id));
}
//获取摸排记录查询列表
export async function fetchCheckRecordList(params = {}) {
    return post(EnumAPI.fetchCheckRecordList, params);
}

//查看详情页面
export async function fetchMemberInfo(id) {
    return get(EnumAPI.fetchMemberInfo(id));
}



//获取下拉选项
export async function fetchSelectInfo(params = {}) {
    return post(EnumAPI.fetchSelectInfo, params);
}