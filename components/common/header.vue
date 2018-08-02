<template>
    <div class="common-header">
      <div class="left"></div>
      <div class="middle">{{navText}}</div>
      <div class="right">
          <img src="./img/home-nav.png"/>
      </div>
    </div>
</template>
<script>
    export default {
      props: ['navText']
    }
</script>
<style lang="less">
  .common-header {
    height: 44px;
    display: flex;
    background:#ffffff;
      justify-content: center;
      align-items: center;
      position: relative;
      .left {
          position: absolute;
          left: 21px;
      }
      .middle {
          font-size: 19px;
          color:#000000;
      }
      .right {
          position: absolute;
          right: 21px;
          img {
              width: 20px;
          }
      }
  }
</style>
