/**
 * 存放最核心功能的管理对象
 * 
 */
import vue from 'vue'
import vuex from 'vuex'
import state from './state'
import actions from './action'
import getters from './getters'
import mutations from './mutation'

//声明使用
vue.vuex(vuex)
//new一个store，传四个对象
export default new vuex.Store({
   state,
   mutations,
   actions,
   getters
})