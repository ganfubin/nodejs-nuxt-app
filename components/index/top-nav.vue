<template>
    <div class="top-nav">
        <div class="nav-item">
            <img src="./img/new.png">
            <span>本地新房</span>
        </div>
        <div class="nav-item">
            <img  src="./img/map-house.png">
            <span>地图选房</span>
        </div>
        <div class="nav-item">
            <img src="./img/active.png">
            <span>营销活动</span>
        </div>
        <div class="nav-item">
            <img src="./img/youhui.png">
            <span>优惠券</span>
        </div>
        <div class="nav-item">
            <img src="./img/baodian.png">
            <span>购房宝典</span>
        </div>

    </div>
</template>
<script>
    export default {}
</script>
<style lang="less">
    .top-nav {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:#ffffff;
        .nav-item {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size:13px;
            color:#252525;
            img {
                width: 40px;
                height: 40px;
                margin-bottom: 12px;
            }
        }
    }
</style>