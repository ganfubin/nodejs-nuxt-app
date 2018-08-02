<template>
    <div class="common-header">
      <div class="left"></div>
      <div class="middle">{{navText}}</div>
      <div class="right"></div>
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
  }
</style>
