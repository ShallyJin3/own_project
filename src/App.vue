<template>
  <div id="app">
   <!-- 显示路由组件标签 -->
   <router-view/>
   <FooterGuide v-show="$route.meta.showFooter"/>

  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/footerGuide.vue'

// import HelloWorld from './components/HelloWorld'

export default {
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
