// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// vue.vuex(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 渲染试图提供给el挂载,效果和楼下灰色的兄弟一样
  render : h => h(App),
  router,//使用上VUE-router
  store//使用上VUEX
  // components: { App },
  // template: '<App/>'
  
})
