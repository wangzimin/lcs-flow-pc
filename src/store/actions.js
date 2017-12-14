import * as types from './mutations-types'
import Utils from '@/util'
import * as CONFIG from '@/config'

export const setCommonInfo = ({commit}, commonInfo) => {
  commit(types.SET_COMMON_INFO, commonInfo);
};

export const getCrmActivityId = async ({commit, state}, params) => {
  try {
    const result = await Utils.request('get', CONFIG.GET_CRM_ID, Utils.paramFilter(params));
    if (result && result.code === 1) {
      commit('SET_CRM_ID', result.data);
      // console.log(result.data)
    }
  } catch (err) {
    return null
  }
};

export const getImgToken = async ({commit, state}, params) => {
  try {
    const result = await Utils.request('get', CONFIG.GET_IMG_TOKEN, Utils.paramFilter(params));
    commit('SET_IMG_TOKEN', result.token);
  } catch (err) {
    return null
  }
};

export const getSmsCode = async ({commit, state}, params) => {
  try {
    const result = await Utils.request('post', CONFIG.GET_SMS_CODE, Utils.paramFilter(params));
    // if(result && result.code === 1){
    commit('SET_SMS_CODE', result);
    // }

  } catch (err) {
    return null
  }
};

export const sendDate = async ({commit, state}, params) => {
  try {
    const result = await Utils.request('post', CONFIG.GET_TRANSFER, Utils.paramFilter(params));
    // if(result && result.code === 1){
    commit('SET_DATA', result);
    console.log(result);
    // }
  } catch (err) {
    return null
  }
};
