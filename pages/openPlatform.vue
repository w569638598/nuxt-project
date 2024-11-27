<template>
 
  <!-- banner -->
  <div class="bannerBox">
        <div class="banner">
            <div class="innerBox flex flexalignCenter">
                <div class="left">
                    <h1 class="title">影划算开放平台</h1>
                    <h2 class="desc" style="font-weight: normal;">影划算开放平台提供专业的标准化API接口接入服务，可满足使用者多方面的业务需求，丰富企业的产品内容、提升竞争优势。</h2>
                </div>
                <div class="img"><img src="~/assets/images/openPlatform/banner.png" alt=""></div>
            </div>
        </div>
    </div>
    <!-- banner-end -->
    <!-- scene -->
    <div class="sceneBox">
        <div class="contentCenter">
            <div class="warpTitleBox  wow animate__slideInDown">
                <h2 class="title">使用场景</h2>
            </div>
            <div class="main">
                <div class="left">
                    <img src="~/assets/images/openPlatform/strIcon.svg" alt="">
                    <p class="desc">拥有一定技术团队的企业，接入影划算电影票API，用于手机App、PC客户端、微信公众号、小程序、支付宝生活号等多种场景，为自己的用户提供在线购买电影票服务，丰富服务内容，促进流量变现。</p>
                </div>
                <div class="right">
                    <div>
                        <img src="~/assets/images/openPlatform/APP.svg" alt="">
                        <p>APP</p>
                    </div>
                    <div>
                        <img src="~/assets/images/openPlatform/pc.svg" alt="">
                        <p>PC</p>
                    </div>
                    <div>
                        <img src="~/assets/images/openPlatform/wechat.svg" alt="">
                        <p>微信公众号</p>
                    </div>
                    <div>
                        <img src="~/assets/images/openPlatform/minig.svg" alt="">
                        <p>小程序</p>
                    </div>
                    <div>
                        <img src="~/assets/images/openPlatform/alipay.svg" alt="">
                        <p>支付宝生活号</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- scene-end -->
    <!-- interface -->
    <div class="interfaceBox">
        <div class="contentCenter">
            <div class="warpTitleBox  wow animate__slideInDown">
                <h2 class="title">接口能力</h2>
                <p class="desc">标准化API接口接入服务，可满足使用者多方面的业务需求</p>
            </div>
            <div class="content">
                <div class="item">
                    <p class="title">基础信息</p>
                    <ul>
                        <li>城市列表API</li>
                        <li>热播电影列表</li>
                        <li>待上映电影列表</li>
                        <li>电影影院列表</li>
                        <li>电影排期列表</li>
                    </ul>
                </div>
                <div class="item">
                    <p class="title">电影场次</p>
                    <ul>
                        <li>电影基础信息</li>
                        <li>电影下的影院列表</li>
                        <li>电影排期日期</li>
                        <li>电影场次座位</li>
                    </ul>
                </div>
                <div class="item">
                    <p class="title">订单创建</p>
                    <ul>
                        <li>创建订单</li>
                        <li>订单详情</li>
                        <li>票据推送</li>
                    </ul>
                </div>
                <div class="item">
                    <p class="title">服务能力</p>
                    <ul>
                        <li>毫秒响应</li>
                        <li>一对一指导</li>
                        <li>专属私人客服</li>
                        <li>7*24客服咨询</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- interface-end -->
    <!-- 合作流程 -->
    <stepBox :imgList="[step1,step2,step3,step4,step5,step6]" :textList="['需求沟通', '协议签订', '接口测试', '技术对接', '平台联调', '部署上线']"></stepBox>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import step1 from '~/assets/images/openPlatform/step1.png';
import step2 from '~/assets/images/openPlatform/step2.png';
import step3 from '~/assets/images/openPlatform/step3.png';
import step4 from '~/assets/images/openPlatform/step4.png';
import step5 from '~/assets/images/openPlatform/step5.png';
import step6 from '~/assets/images/openPlatform/step6.png';
  useSeoMeta({
          title: '影划算电影票API接口提供商，免费接口文档+技术指导，大大节省开发效率成本',
          meta: [
              { name: 'keywords', content: '猫眼电影票接口,淘票票电影票接口,电影票API接口,电影票文档,电影票接口,影划算电影票,电影票开放平台' },
              { name: 'description', content: '影划算开放平台提供专业的标准化API接口接入服务+技术指导，高效对接，省时省力，接入方可自行调整售票价格，满足自己的个性化需求，丰富企业的产品内容、提升竞争优势。' }
          ]
      })

      onMounted(() => {
        // 动画
        inScreenAnimation('.sceneBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.interfaceBox .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.collaborationProcess .warpTitleBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})
        // 添加客服浮窗
addCustomerService()
    })
  </script>
  
  <style lang="scss" scoped>
  
@media(max-width: 1200px) {
    :deep(.collaborationProcess) {
        .list {
            .listItem {
                .title {
                    font-size: 12rem;
                }
            }
        }
    }

    .interfaceBox {
        .content {
            flex-direction: column;

            .item {
                @include centerWrap;
                padding-top: 0 !important;
                margin-bottom: 16rem !important;

                &:last-child {
                    margin-bottom: 0 !important;
                }
            }
        }
    }

    .sceneBox {
        .main {
            flex-direction: column;

            .right {
                flex-wrap: wrap;
                justify-content: center !important;

                &>* {
                    &:nth-child(2) {
                        margin-left: 10rem !important;
                        margin-right: 10rem !important;
                    }

                    &:nth-child(5),
                    &:nth-child(4) {
                        margin-left: 5rem !important;
                        margin-right: 5rem !important;
                    }

                    margin: 0 !important;
                    margin-bottom: 12rem !important;
                    padding: 0 !important;
                    width: 90rem;
                    height: 90rem;

                    p {
                        margin: 0;
                        margin-top: 3rem;
                        ;
                    }

                }
            }

            .left {
                @include centerWrap;

                img {
                    display: none;
                }
            }
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
                    font-size: 14rem;
                }
            }

            img {
                width: 80%;
                margin: 0 auto;
                display: block;
                position: relative;
                z-index: 1;
                top: -10px;
            }
        }
    }
}


.warpTitleBox {
    h2 {
        margin: 0;
    }
}

.interfaceBox {
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .item {
            border-radius: 2px;
            padding: 24px;
            width: 276px;
            height: 292px;
            background-color: linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
            box-sizing: border-box;

            &:nth-child(1) {
                background: url('~/assets/images/openPlatform/1.png') no-repeat bottom left, linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
            }

            &:nth-child(2) {
                background: url('~/assets/images/openPlatform/2.png') no-repeat bottom left, linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
            }

            &:nth-child(3) {
                background: url('~/assets/images/openPlatform/3.png') no-repeat bottom left, linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
            }

            &:nth-child(4) {
                background: url('~/assets/images/openPlatform/4.png') no-repeat bottom left, linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
            }

            .title {
                color: $text-color-primary;
                font-size: $thirdLevel;
                font-weight: bold;
            }

            ul {
                padding: 0;
                margin: 0;
                margin-left: 24px;

                li::marker {
                    content: counter(list-item) "、";
                }

                li {
                    list-style: none;
                    line-height: 180%;
                    color: $c4e;
                }
            }
        }
    }
}

.banner {
    img {
        width: 440px;
        height: 100%;
        object-fit: contain;
    }
}

.sceneBox {
    .main {
        border-radius: 2px;
        background: linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
        padding: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            width: 37%;

            .desc {
                line-height: 160%;
            }
        }

        .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 2px;

            &>* {
                background: #F6FAFF;
                padding: 12px 26px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 0 16px;
            }
        }
    }
}
  </style>