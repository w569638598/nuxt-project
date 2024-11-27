<template>
<div class="banner">
        <div class="innerBox flex flexalignCenter">
            <div class="left">
                <h1 class="title" style="margin: 0;">淘宝电商-淘宝电影票</h1>
                <p class="line"></p>
                <div class="descBox">
                    <div class="item">
                    <p class="dtitle fs-16 fc-1d fs-b">功能特点：</p>
                    <p class="descText fs-16 fc-4e">可实现淘宝用户消息识图自动报价、自动邀请下单、自动出票、自动发货等等全自动化流程，可大大提高工作效率、节约人力成本。</p>
                </div>
                <div class="item">
                    <p class="dtitle fs-16 fc-1d fs-b">适用人群：</p>
                    <p class="descText fs-16 fc-4e">从事淘宝电影票代订票行业，有一定的店铺运营经验，经常使用手工差价、手工放单，效率慢且转化差，想提高工作效率、节约人力成本的电商网店店主。</p>
                </div>
                </div>
            </div>
            <img id="bannerImg" style="width: 406px;" src="~/assets/images/taobao/banner.png" alt="" srcset="" />
        </div>
    </div>
    <!-- banne-end -->
    <div class="supportBox">
        <div class="warpTitleBox wow animate__slideInDown">
          <h2 class="title">资源优势</h2>
        </div>
        <div class="superiorBox contentCenter">
          <div class="flcc fl-col item">
              <p class="desc fc-1d fs-16">淘宝子账号云挂机方式部署、无需安装任何软件、全自动报价出票。</p>
              <img src="~/assets/images/taobao/resource1.png" alt="" />
          </div>
          <div class="flcc fl-col item">
              <p class="desc fc-1d fs-16">独立后台操作，支持影院票价自定义报价设置，报价更灵活。</p>
              <img src="~/assets/images/taobao/resource2.png" alt="" />
          </div>
          <div class="flcc fl-col item">
              <p class="desc fc-1d fs-16">独立放单系统，支持手动一键报价+邀请下单，千牛消息自动发送报价信息。</p>
              <img src="~/assets/images/taobao/resource3.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 资源优势-end -->
      <div class="sceneBox">
        <div class="warpTitleBox wow animate__slideInDown">
          <h2 class="title">使用场景</h2>
        </div>
        <div class="sceneMainBox contentCenter">
          <div class="flcc fl-col item">
              <img src="~/assets/images/taobao/queryPrice.png" alt="" />
              <p class="desc fc-1d fs-16">用户询价</p>
          </div>
          <div class="flcc fl-col item">
              <img src="~/assets/images/taobao/robotQuotation.png" alt="" />
              <p class="desc fc-1d fs-16">机器报价</p>
          </div>
          <div class="flcc fl-col item">
              <img src="~/assets/images/taobao/autoPutOrder.png" alt="" />
              <p class="desc fc-1d fs-16">自助出票</p>
          </div>
        </div>
      </div>
      <!-- 后台管理页面 -->
      <div class="adminManageBox linear-gb">
        <div class="warpTitleBox wow animate__slideInDown">
          <h2 class="title">后台管理</h2>
        </div>
        <div class="adminManageMainBox contentCenter">
            <div class="pagesBox">
                <img src="~/assets/images/taobao/managePage1.png" alt="" />
                <img src="~/assets/images/taobao/managePage2.png" alt="" />
            </div>
          <div class="functionsBox">
            <p class="pcFunctions">数据统计 | 报价方案管理 | 用户管理 | 订单管理 | 多店铺管理 | 自定义场景化回复</p>
            <div class="mobileFunctions"><span>数据统计</span><span>报价方案管理</span><span>用户管理</span><span>订单管理</span><span>多店铺管理</span><span>自定义场景化回复</span></div>
          </div>
          
        </div>
      </div>
    <!-- 合作流程 -->
    <stepBox title="合作流程" :textList="['注册账号', '签约协议', '应用搭建', '上线运营']" :imgList="imgList" ></stepBox>
</template>

<script setup>
import { onMounted } from 'vue';
import step1 from '~/assets/images/taobao/step1.png';
import step2 from '~/assets/images/taobao/step2.png';
import step3 from '~/assets/images/taobao/step3.png';
import step4 from '~/assets/images/taobao/step4.png';
const imgList = [step1 , step2, step3, step4]
useSeoMeta({
        title: '淘宝自动出票系统|淘宝拼多多识图报价系统|咸鱼电影票自动报价系统',
        meta: [
            { name: 'keywords', content: '淘宝电影票,淘宝自动报价,淘宝识图报价,咸鱼电影票,拼多多电影票自动报价,电影票机器人系统,电影票API接口' },
            { name: 'description', content: '可实现淘宝用户消息识图自动报价、自动邀请下单、自动出票、自动发货等等全自动化流程，可大大提高工作效率、节约人力成本。' }
        ]
    })
    onMounted(() => {
        inScreenAnimation('.supportBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.supportBox .superiorBox', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})


inScreenAnimation('.sceneBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.adminManageBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

// inScreenAnimation('.adminManageMainBox .pagesBox', e => {
//     e.classList.add('animate__slideInUp', 'animate__animated')
// })

inScreenAnimation('.stepBox .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

// inScreenAnimation('.stepBox .list', e => {
//     e.classList.add('animate__slideInUp', 'animate__animated')
// })
        // 添加客服浮窗
addCustomerService()
    })
</script>

<style lang="scss" scoped>
@mixin linear() {
    padding: 8px 24px;
    border-radius: 24px;
    font-weight: bold;
    background: linear-gradient(180deg, #D8EBFF 0%, #EDF9FF 100%);
    color: $blue;
}
@media(max-width: 1200px) {
    .pcFunctions {
        display: none !important;
    }
    .stepBox{
        padding-bottom: 0 !important;
    }
    .mobileFunctions {
        display: block !important;

        span {
            @include linear;
            white-space: nowrap;
            font-size: 12px;
            margin: 12px;
            display: inline-block;
            margin: 6px 1px;
        }
    }

    .adminManageBox {
        padding-bottom: 20px !important;

        .adminManageMainBox {
            .pagesBox {
                grid-template-columns: repeat(1, 1fr) !important;
                gap: 12px !important;
            }
        }
    }

    .sceneMainBox {
        gap: 12px !important;

        .item {
            p {
                padding: 8px 12px !important;
                font-size: 14px !important;
            }
        }
    }

    .superiorBox {
        grid-template-columns: repeat(1, 1fr) !important;
    }

    .banner {
        width: 100% !important;
        min-width: 100% !important;
        background: #E2E8F0 !important;
        padding-top: 26px;
        height: auto !important;
        padding-bottom: 20px;

        .line {
            display: none;
        }

        .descBox {
            display: grid;
            justify-content: space-between;
            grid-template-columns: repeat(2, 1fr);
            margin: auto;
            width: 90% !important;
            gap: 10px;

            .item {
                background: white;
                padding: 16px;
                box-sizing: border-box;
                border-radius: 2px;

                .descText {
                    font-size: 12px;
                    line-height: 160%;
                    margin: 0;
                }

                .dtitle {
                    margin-top: 0;
                    margin-bottom: 6px
                }
            }
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
                }

                .descBox {

                    .dtitle,
                    .descText {
                        text-align: left;
                    }
                }
            }

            img {
                width: 66% !important;
                margin: 0 auto;
                display: block;
                position: relative;
                z-index: 1;
            }
        }
    }
}


.banner {
    .line {
        background: $blue;
    }

    .descBox {
        width: 80%;

        .item {
            margin-top: 22px;
        }
    }
}

.supportBox {
    .superiorBox {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;

        .item {
            background: linear-gradient(180deg, #fbfdff 0%, #f0f7ff 100%);

            p {
                padding: 24px;
                box-sizing: border-box;
                margin: 0;
            }

            img {
                width: 100%;
            }
        }
    }
}

.sceneMainBox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;

    .item {
        img {
            width: 100%;
        }

        p {
            padding: 8px 24px;
            border-radius: 24px;
            font-weight: bold;
            background: linear-gradient(180deg, #D8EBFF 0%, #EDF9FF 100%);
            color: $blue;
            margin: 0;
            margin-top: 16px;
        }
    }
}

.adminManageBox {
    padding-bottom: 88px;

    .adminManageMainBox {
        .pagesBox {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 52px;

            img {
                width: 100%;
            }
        }

        .functionsBox {
            text-align: center;

            .mobileFunctions {
                display: none;
            }

            .pcFunctions {
                display: block;
                @include linear;
                margin: 0;
                margin-top: 12px;
                display: inline-block;
                text-align: center;
            }
        }
    }
}


</style>