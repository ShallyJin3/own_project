/**
 * 存放最核心功能的管理对象
 * 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './action'
import getters from './getters'
import mutations from './mutation'

//声明使用
Vue.use(Vuex)
//new一个store，传四个对象
const store = new Vuex.Store({
   state,
   mutations,
   actions,
   getters
})

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'
// import app from './modules/app'

// import getters from './getters'

// Vue.use(Vuex)

// const store = new Vuex.Store({
// 	modules: {
// 		app,
	
// 	},
// 	getters
// })

// export default store