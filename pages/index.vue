<template>
    <div class="index-home">
        <top-banner></top-banner>
        <top-nav></top-nav>
        <notice></notice>
        <hot-houses></hot-houses>
    </div>
</template>

<script>
    import topBanner from '../components/index/top-banner.vue'
    import topNav from '../components/index/top-nav.vue'
    import notice from '../components/index/notice.vue'
    import hotHouses from '../components/index/hot-houses.vue'
    export default {
        components: {
            topBanner,
            topNav,
            notice,
            hotHouses
        }
    }
</script>

<style>

</style>

