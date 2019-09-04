<template>
  <div id="app">
   <!-- 显示路由组件标签 -->
   <router-view/>
   <FooterGuide v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/footerGuide.vue'
//import {reqFoodType} from './api'
import {mapActions} from 'vuex'

// import HelloWorld from './components/HelloWorld'

export default {
  //发请求
  mounted() {
    // const res = await reqFoodType()
    // console.log(res)
   // this.$store.dispatch('getAddress')
   this.getAddress()
 
   },
   methods: {
     ...mapActions(['getAddress'])
   },
  // 向外暴露映射成为标签
  components :{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .app
    width 100%
    height 100%
    background-color #eeeeee
    
</style>
