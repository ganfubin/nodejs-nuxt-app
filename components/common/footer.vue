<template>
    <div class="common-footer">
        <div class="foot-item" v-for="(item, index) in footBar"
             :key="index"
             @click="toggleActive(index)"
        :class="[activeIndex == index ? 'active' : '']">
            <img :src="item.imgSrc" class="icon" v-if="activeIndex !== index"/>
            <img :src="item.imgSrcActive" class="icon" v-else/>
            <span>{{item.name}}</span>
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
                    imgSrc: require('./img/home.png'),
                    imgSrcActive: require('./img/home-active.png')
                }, {
                    name: '楼盘',
                    imgSrc: require('./img/house.png'),
                    imgSrcActive: require('./img/house-active.png')
                }, {
                    name: '服务',
                    imgSrc: require('./img/server.png'),
                    imgSrcActive: require('./img/server-active.png')
                }, {
                    name: '我的',
                    imgSrc: require('./img/user.png'),
                    imgSrcActive: require('./img/user-active.png')
                }]
            }
        },
        methods: {
            toggleActive(index){
                this.activeIndex = index;
                console.log(this.activeIndex)
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
            color:#7a7a7a;
            .icon {
                width: 24px;
            }
            &.active {
                color:#252525;
            }
        }
    }
</style>
