<template>
  <div class="common-layout">
    <nuxt/>
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

  }
  .common-layout {
    max-width: 640px;
  }

</style>

