<template>
    <div class="hot-houses">
        <div class="header">
            <img src="./img/hot.png" class="hot"/>
            <div class="desc">热点楼盘</div>
            <img src="./img/right.png" class="right"/>
        </div>
        <div class="house-list">
            <div class="house-list-item">
                <img src="" class="house-img">
                <div class="hot-sale">热销</div>
                <div class="price">均价(约) 12500元/m</div>
                <div class="houses-name">
                    <div class="name">时代香海彼岸（清远）</div>
                    <img src="./img/hollow-heart.png" class="icon"/>
                </div>
                <div class="houses-address">
                    <img src="./img/address.png" class="icon"/>
                    <div class="address">清远区 清远区 凤城街道办事处1号</div>
                </div>
                <div class="houses-tag">
                    <div class="tag">地铁上盖</div>
                    <div class="tag">公园大城</div>
                    <div class="tag">高级中学</div>
                    <div class="tag">户户朝南</div>
                    <div class="tag">户户朝南</div>
                </div>
            </div>
            <div class="house-list-item">
                <img src="" class="house-img">
                <div class="price">均价(约) 12500元/m</div>
                <div class="houses-name">
                    <div class="name">时代香海彼岸（清远）</div>
                    <img src="./img/hollow-heart.png" class="icon"/>
                </div>
                <div class="houses-address">
                    <img src="./img/address.png" class="icon"/>
                    <div class="address">清远区 清远区 凤城街道办事处1号</div>
                </div>
                <div class="houses-tag">
                    <div class="tag">地铁上盖</div>
                    <div class="tag">公园大城</div>
                    <div class="tag">高级中学</div>
                    <div class="tag">户户朝南</div>
                </div>
            </div>
            <div class="house-list-item">
                <img src="" class="house-img">
                <div class="price">均价(约) 12500元/m</div>
                <div class="houses-name">
                    <div class="name">时代香海彼岸（清远）</div>
                    <img src="./img/hollow-heart.png" class="icon"/>
                </div>
                <div class="houses-address">
                    <img src="./img/address.png" class="icon"/>
                    <div class="address">清远区 清远区 凤城街道办事处1号</div>
                </div>
                <div class="houses-tag">
                    <div class="tag">地铁上盖</div>
                    <div class="tag">公园大城</div>
                    <div class="tag">高级中学</div>
                    <div class="tag">户户朝南</div>
                    <div class="tag">户户朝南</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less">
    .hot-houses {
        padding: 10px 28px;
        background: #fff;
        .header {
            display: flex;
            position: relative;
            .desc {
                font-size: 15px;
                color: #454545;
                line-height: 29px;
                margin-left: 25px;
                font-weight: bold;
            }
            img {
                vertical-align: middle;
                position: absolute;

            }
            .hot {
                width: 16px;
                top: 2px;
            }
            .right {
                right: 0;
            }
        }
        .house-list {
            .house-list-item {
                margin: 15px 0 40px 0;
                position: relative;
                .house-img {
                    height: 165px;
                    width: 100%;
                }
                .hot-sale {
                    position: absolute;
                    top: 0;
                    background: url("./img/hot-sale.png") no-repeat;
                    font-size:13px;
                    color:#ffffff;
                    width: 60px;
                    height: 20px;
                    line-height: 20px;
                    background-size: contain;
                    text-align: center;
                }
                .price {
                    position: absolute;
                    height: 40px;
                    width: 100%;
                    top: 125px;
                    opacity: 0.6;
                    background: #000000;
                    font-size: 14px;
                    color: #ffffff;
                    line-height: 40px;
                    padding-left: 7px;
                }
                .houses-name {
                    font-size: 17px;
                    color: #454545;
                    font-weight: bold;
                    display: flex;
                    justify-content: space-between;
                    .icon {
                        width: 20px;
                        height: 17px;
                        margin-right: 5px
                    }
                }
                .houses-address {
                    display: flex;
                    font-size: 13px;
                    color: #7a7a7a;
                    margin-top: 5px;
                    .icon {
                        width: 12px;
                        height: 15px;
                        margin-right: 5px
                    }
                }
                .houses-tag {
                    margin-top: 5px;
                    .tag {
                        color:#b2b2b2;
                        border:1px solid #979797;
                        border-radius: 2px;
                        width: 69px;
                        height: 19px;
                        line-height: 20px;
                        text-align: center;
                        display: inline-block;
                        font-size: 13px;
                        margin-top: 5px;
                    }
                    .tag + .tag {
                       margin-left: 10px;
                    }
                    .tag:nth-child(4n + 1) {
                        margin-left: 0;
                    }
                }
            }
        }
    }
</style>