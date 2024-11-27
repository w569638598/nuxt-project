<template>
    <div class="banner">
        <div class="innerBox flex flexalignCenter">
            <div class="left">
                <h1 class="title">影划算在线购票系统</h1>
                <h2 class="desc" style="font-weight: normal;">专注提供特价电影票，覆盖全国12000+家电影院，在线订座、无需排队、极速出票、自助取票。</h2>
            </div>
            <img id="bannerImg" src="~/assets/images/saas/index_banner.png" alt="" srcset="" />
        </div>
    </div>
    <!-- banner-end -->
    <div class="advantageBox">
        <div class="warpTitleBox wow animate__slideInDown">
            <h2 class="title">资源优势</h2>
        </div>
        <div class="list flex flexBetween">
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/gfg.png" alt="" />
                <div class="title">高覆盖</div>
                <div class="desc">覆盖全国12000+家大小影院，如万达、大地、横店、万象、金逸、卢米埃等</div>
            </div>
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/glr.png" alt="" />
                <div class="title">高利润</div>
                <div class="desc">数千家供票商竞价出票，最低3折成本出票，利润空间更高</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/glh.png" alt="" />
                <div class="title">高灵活</div>
                <div class="desc">双模式出票自由选择，特惠模式：利润空间高，极速模式：出票时间短</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/gwd.png" alt="" />
                <div class="title">高稳定</div>
                <div class="desc">阿里云多服务部署，实现各节点之间的网络高速互联，保障服务平稳运行。</div>
            </div>
        </div>
    </div>
    <!-- advantageBox-end -->
    <div class="partnerBox">
        <div class="warpTitleBox wow animate__slideInDown">
            <h2 class="title">合作优势</h2>
        </div>
        <div class="list flex flexBetween flexwarp">
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/xtkssx.png" alt="" />
                <div class="title">系统快速上线</div>
                <div class="desc">成熟的购票系统、满足多场景对接需求，最快当天上线</div>
            </div>
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/zdypp.png" alt="" />
                <div class="title">自定义品牌</div>
                <div class="desc">支持部署自己的小程序，自助域名绑定，品牌完全自主化</div>
            </div>
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/qstbs.png" alt="" />
                <div class="title">全生态部署</div>
                <div class="desc">微信生态、支付宝小程序生态、抖音小程序生态、App生态</div>
            </div>
            <div class="listItem wow animate__fadeInLeft">
                <img src="~/assets/images/saas/dzyxfs.png" alt="" />
                <div class="title">多种营销方式</div>
                <div class="desc">支持优惠券、权益包、消费金、积分商城，促活用户、提高转化</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/ksjslr.png" alt="" />
                <div class="title">快速结算利润</div>
                <div class="desc">电影放映结束2小时后结算利润</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/ssfzxt.png" alt="" />
                <div class="title">实时分账系统</div>
                <div class="desc">通过实时分账功能实现SaaS系统 免预存充值，无垫资压力。</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/jkkfpt.png" alt="" />
                <div class="title">接口开发平台</div>
                <div class="desc">提供api接口对接，满足开发者自定义开发需求</div>
            </div>
            <div class="listItem wow animate__fadeInRight">
                <img src="~/assets/images/saas/zytd.png" alt="" />
                <div class="title">专业团队</div>
                <div class="desc">专业客服、运营、技术团队一对一售后、为您保驾护航</div>
            </div>
        </div>
    </div>
    <!-- partnerBox-end -->
    <!-- show page -->
    <div class="showPage">
        <div class="contentCenter">
            <div class="warpTitleBox wow animate__slideInDown">
                <h2 class="title">页面展示</h2>
            </div>
        </div>
        <div class="pageImg">
            <div class="contentCenter">
                <div class="img">
                    <img src="~/assets/images/saas/image_27.png" alt="">
                    <span>热门电影</span>
                </div>
                <div class="img">
                    <img src="~/assets/images/saas/image_28.png" alt="">
                    <span>附近电影院</span>
                </div>
                <div class="img">
                    <img src="~/assets/images/saas/image_29.png" alt="">
                    <span>场次排期</span>
                </div>
                <div class="img">
                    <img src="~/assets/images/saas/image_30.png" alt="">
                    <span>在线选座</span>
                </div>

            </div>
        </div>
    </div>
    <!-- showPage-end -->
    <stepBox title="接入流程" />
</template>

<script setup>
import { onMounted } from 'vue';
    useSeoMeta({
        title: '影划算电影票SaaS系统，支持微信+支付宝小程序+H5+公众号+独立后台+自定义OEM',
        meta: [
            { name: 'keywords', content: '电影票小程序,电影票SaaS系统,电影票API,电影票H5,电影票订购平台,电影卡系统,电影票优惠券' },
            { name: 'description', content: '影划算电影票提供全国电影院在线购票服务系统搭建，独立研发特价电影票优惠购票SaaS系统，支持微信/支付宝小程序系统搭建，自主品牌OEM、多种营销模式、分销系统实时结算，并提供开放平台API接口技术对接。' }
        ]
    })
    
onMounted(() => {
// 添加客服浮窗
addCustomerService()
})
</script>

<style lang="scss" scoped>

@media(max-width: 1200px) {
    .showPage {
        .contentCenter {
            .title {
                padding: 0 !important;
                margin: 0;
                font-size: $mobileTitleFs !important;
            }
        }

        .pageImg {
            .contentCenter {
                flex-wrap: wrap;

                .img {
                    width: 48%;
                    margin-bottom: 24rem;
                    -webkit-animation-duration: .3s;
                    animation-duration: .3s;
                }
            }
        }
    }

    .partnerBox {
        .listItem {
            width: 100% !important;
            border: solid 1rem #E1E7EE;
            padding: 16rem;
            margin-bottom: 16rem;

            .title {
                margin-top: 8rem !important;
                padding: 0 !important;
                font-size: 18rem !important;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .advantageBox {
        padding-bottom: 0 !important;

        .listItem {
            width: 48% !important;
            margin-bottom: 16rem;

            .title {
                margin: 0 !important;
                padding: 12rem !important;
                font-weight: bold;
            }

            .desc {
                margin-top: 12rem;
            }

            &:nth-child(3),
            &:nth-child(4) {
                margin-bottom: 0;
            }
        }
    }

    .advantageBox,
    .partnerBox {
        .title {
            padding: 0 !important;
            font-size: $mobileTitleFs !important;
        }

        .list {
            flex-wrap: wrap;
            @include centerWrap;

        }
    }

    .banner {
        width: 100% !important;
        min-width: 100% !important;
        background: #E2E8F0 !important;
        padding-top: 26px;

        .line {
            display: none;
        }

        .innerBox {
            @include centerWrap;
            overflow: hidden;
            display: block;

            .left {
                text-align: center;
                margin-right: 0 !important;
                position: relative;
                z-index: 2;
                width: auto !important;

                .title {
                    font-size: 20px;
                    line-height: 28px;
                    margin-top: 10rem;
                }

                .desc {
                    line-height: 180%;
                    white-space: break-spaces;
                    margin-top: 5rem;
                }
            }

            img {
                width: 80%;
                margin: 0 auto;
                display: block;
                position: relative;
                z-index: 1;
                top: -80px;
            }
        }
    }
}

.pageImg {
    background: linear-gradient(180deg, #FBFDFF 0%, #F0F7FF 100%);
    padding-bottom: 50px;

    .contentCenter {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .img {
            width: 23%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            span {
                margin-top: 16px;
                font-size: $thirdLevel;
                color: $text-color-primary;
                font-weight: bold;
                padding-bottom: 6px;
                border-bottom: solid 4px $blue;
            }

            img {
                width: 100%;
            }
        }
    }
}

.advantageBox {
    text-align: center;
    .list {
        width: 1200px;
        margin: 0 auto;

        .listItem {
            width: 238px;
            border: 1px solid $border-color-primarry;
            border-radius: 2px;
            padding: 20px;
            box-sizing: border-box;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                transform: translateY(-10px);
                // transform: scale(1.1);
            }

            img {
                width: 48px;
                height: 48px;
            }

            .title {
                padding: 0 0 12px;
                margin: 12px 0;
                font-size: $thirdLevel;
                font-weight: bold;
                border-bottom: 1px solid $border-color-regular;
            }

            .desc {
                color: $text-color-regular;
                line-height: 22px;
                text-align: left;
            }
        }
    }
}





.partnerBox {
    background: linear-gradient(180deg, #fbfdff 0%, #f0f7ff 100%);
    text-align: center;
    padding-bottom: 48px;


    .list {
        width: 1200px;
        margin: 0 auto;

        .listItem {
            width: 25%;
            border-radius: 2px;
            padding: 20px;
            box-sizing: border-box;
            transition: all 0.3s;

            &:hover {
                // transform: translateY(-10px);
                transform: scale(1.1);
            }

            img {
                width: 80px;
                height: 80px;
            }

            .title {
                margin: 16px 0 12px;
                font-size: $thirdLevel;
                padding: 0;
                font-weight: bold;
            }

            .desc {
                color: $text-color-regular;
                line-height: 22px;
                text-align: left;
            }
        }
    }
}
</style>