import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import mutations from './mutations'

Vue.use(Vuex)


const state = {//全局变量
  commonInfo: {},
  CrmActivityId: {},
  ImgToken: '',
  SendCode:{},
  sendData:{},
  inited: false

};
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {

  },
  mutations,
  strict: debug
});

