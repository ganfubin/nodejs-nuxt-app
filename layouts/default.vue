<template>
  <div class="common-layout">
    <nuxt class="view"/>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import commonFooter from '../components/common/footer.vue'

  export default {
    components: {
      commonFooter
    }
  }
</script>
<style>
  html,body {
    max-width: 640px !important;
    margin-right: auto;
    margin-left: auto;
    min-width: 320px;
    background: #f8f8f8;

  }
  .common-layout {
    max-width: 640px;
  }
  .view {
    padding-bottom: 44px;
  }

</style>

