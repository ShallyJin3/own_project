<template>
  <div class="footer_guide">
    <a
      href="javascript:;"
      class="guide_item"
      v-for="(item,index) of bottomBar"
      :key="item.name"
      :class="{active:item.isActive}"
      @click="handleClick(index,item.router);"
    >
    <!-- 对象语法：类名确定，但是不确定要或者不要 -->
      <span class="item_icon">
        <i class="iconfont" :class="item.icon"></i>
      </span>
      <span class="subTitle">{{item.name}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomBar: [
        { name: "外卖", icon: "icon-icon-test3", isActive: true,router:'/msite' },
        { name: "搜索", icon: "icon-icon-test1", isActive: false,router:'/search'},
        { name: "订单", icon: "icon-icon-test", isActive: false,router:'/order'},
        { name: "我的", icon: "icon-accountfilling", isActive: false ,router:'/profile'}
      ]
    };
  },
  // 点击改变颜色状态
  methods: {
    handleClick(index,router) {
      this.bottomBar.map((item, itemIndex) => {
        item.isActive = false;
        if (index === itemIndex) {
          item.isActive = true;
        }
        return item;  
      });
      this.$router.push(router)//将路由push进去
    },
 
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/styuls/mixins.styl';

.footer_guide {
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
    text-decoration :none;
  } 
  .item_icon{
    width :23px;
    height :23px;
    }
  .active {
    color: #02a774;
  }

  .subTitle {
    font-size: 13px;
  }
}
</style>
