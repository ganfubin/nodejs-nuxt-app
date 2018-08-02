<template>
    <div class="top-banner">
        <div class="top">
            <img src="./img/logo.png">
        </div>
        <div class="search">
            <div class="city">
               <img src="./img/map.png">
                <span class="city-name">广州</span>
            </div>
            <div class="input-container">
                <input placeholder="请输入楼盘名称"/>
            </div>
        </div>
        <div class="mask"></div>
        <div class="img-container">
            <img src="./img/img_banner1.png">
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less">
    .top-banner {
        width: 100%;
        position: relative;
        background:#ffffff;
        .top {
            height: 44px;
            text-align: center;
            padding: 11px 0;
            img {
                width: 92px;
            }
        }
        .search {
            height: 45px;
            position: absolute;
            width: 100%;
            z-index: 10;
            padding: 7px 10px;
            display: flex;
            .city {
                font-size:14px;
                color:#ffffff;
                line-height: 30px;
                img {
                    width: 12px;
                    vertical-align: middle;
                }
                .city-name {
                    margin-left: 5px;
                }
            }
            .input-container {
                margin-left: 20px;
                flex: 1;
                input {
                    background:#ffffff;
                    border:1px solid #c5c5c5;
                    border-radius:3px;
                    height:30px;
                    width: 100%;
                    padding: 8px 10px;
                    background: url("./img/search.png") no-repeat no-repeat 98% 5px;
                    background-size: 20px 20px;
                    color: #7a7a7a;
                    background: #fff;
                }
                input::-webkit-input-placeholder { /* WebKit browsers */
                    font-size:14px;
                    color:#7a7a7a;
                }
                input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    font-size:14px;
                    color:#7a7a7a;
                }
                input::-moz-placeholder { /* Mozilla Firefox 19+ */
                    font-size:14px;
                    color:#7a7a7a;
                }
                input:-ms-input-placeholder { /* Internet Explorer 10+ */
                    font-size:14px;
                    color:#7a7a7a;
                }
            }
        }
        .mask {
            height: 45px;
            position: absolute;
            width: 100%;
            z-index: 9;
            opacity: 0.24;
            background: #000000;

        }
        .img-container {
            height: 175px;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }
</style>