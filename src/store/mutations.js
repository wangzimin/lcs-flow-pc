import * as types from './mutations-types'
import store from '@/store'

export default {
  [types.SET_COMMON_INFO](state, commonInfo){
    state.commonInfo = commonInfo;
  },
  [types.SET_CRM_ID](state, data){
    state.CrmActivityId = data;
  },
  [types.SET_IMG_TOKEN](state, data){
    state.ImgToken = data;
  },
  [types.SET_SMS_CODE](state, data){
    state.SendCode = data;
  },
  [types.SET_DATA](state, data){
    state.sendData = data;
  },

}
