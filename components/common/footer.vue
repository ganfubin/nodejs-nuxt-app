<template>
  <div class="common-footer">
    <div class="foot-item" @click="toggleActive">
      <img src="./img/home.png" class="icon-home icon"/>
      <span>首页</span>
    </div>
    <div class="foot-item">
      <img src="" class="icon-home"/>
      <span>楼盘</span>
    </div>
    <div class="foot-item">
      <img src="./img/server.png" class="icon-server icon"/>
      <span>服务</span>
    </div>
    <div class="foot-item">
      <img src="./img/user.png" class="icon-user icon"/>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        activeIndex: 0,
        footBar: [{
          name: '首页',
          imgSrc: './img/home.png'
        },{

        },{

        },{

        }]
      }
    },
    methods: {
      toggleActive(index){
        this.activeIndex = index;
      }
    }
  }
</script>
<style lang="less">
  .common-footer {
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    max-width: 640px !important;
    margin-right: auto;
    margin-left: auto;
    min-width: 320px;
    background: #ffffff;
    .foot-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        margin-bottom: 5px;
      }
    }
  }
</style>
