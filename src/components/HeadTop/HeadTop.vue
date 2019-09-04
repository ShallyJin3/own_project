<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot class="right"></slot>
  </header>
</template>

<script>
export default {
  //定义
  props: {
    title: String
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header { // 头部公共css
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;

  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;

    .iconfont {
      font-size: 22px;
      color: #fff;
    }
  }

  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    color: #fff;
    font-size: 14px;
    text-align: center;
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .header_title_text {
   
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
