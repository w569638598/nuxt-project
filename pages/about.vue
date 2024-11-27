<script setup>
import { onMounted, ref } from 'vue'

  useSeoMeta({
          title: '影划算电影票 - 关于我们',
          meta: [
              { name: 'keywords', content: '影划算电影票,影划算票务,电影票接口,电影票API,电影票SaaS系统,电影票小程序,特价影票,5折电影票,特惠电影票,电影票学生价,电影票订购平台' },
              { name: 'description', content: '河南影划算传媒有限公司是一家专注于电影票务营销与服务的创新型公司，公司秉承“让电影票划算”的理念，致力于为用户提供优质、便捷、实惠的电影票务服务，公司以用户需求为导向，以技术创新为驱动，不断提升服务品质。票务业务覆盖全国12000多家，为用户提供更多选择。同时，公司还通过优惠券、会员卡等营销手段，不断降低电影票价，让用户享受到更加实惠的价格。' }
          ]
      })
      onMounted(() => {
        
const line = $('#line')
const onlineApp = $('#onlineApp')
const totalTicket = $('#totalTicket')
const customer = $('#customer')
function elIsIntersecting(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animationNum(line, 12000, { unit: '+' })
            animationNum(onlineApp, 3000, { unit: '+' })
            animationNum(totalTicket, 1000, { unit: 'W+' })
            animationNum(customer, 2000, { unit: '+' })
        } else {
            line.innerText = 0
            onlineApp.innerText = 0
            totalTicket.innerText = 0
            customer.innerText = 0
        }
    });
}
var observer = new IntersectionObserver(elIsIntersecting, {
    root: null, // 根元素为视口  
    rootMargin: '0px', // 根元素的边距为0  
    threshold: 0.1 // 当元素进入视口的比例达到10%时触发回调函数
});
observer.observe($('#data'))

// contentMainTitle
const  isMobileP  = isMobile()
if (isMobileP) {
    $('.banner').innerHTML=`<img src='/staticResources/about/mobileBanner.png' />`

}else{

}


// 动画
inScreenAnimation('.contentMain .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.contactUs .warpTitleBox .title', e => {
    e.classList.add('animate__slideInUp', 'animate__animated')
})

  // 添加客服浮窗
addCustomerService()
      })
</script>
<template>
   <!-- banner -->
   <div class="banner">
        <img class="" style="width: 100%" src="~/assets/images/about/pcBanner1.png" alt="">
    </div>
    <!-- banner-end -->
    <!-- content -->
    <div class="contentMain">
        <div class="warpTitleBox" id="contentMainTitle">
            <h2 class="title">公司介绍</h2>
        </div>
        <div class="contentCenter">
            <div class="desc">
                <div class="textBox">
                    <div class="text">
                        <p>河南影划算传媒有限公司是一家专注于电影票务营销与服务的创新型公司，总部位于河南省郑州市自贸试验区，公司秉承“让电影票更划算”的理念，致力于为用户提供优质、便捷、实惠的电影票务服务。公司拥有一支专业的技术研发团队，具备丰富的行业经验和出色的创新能力，通过不断探索和研发，打造出了一款集订票、选座、支付、取票等功能于一体的特惠电影票务平台，为用户带来更加优惠的购票观影体验。
                        </p>
                        <p>公司以用户需求为导向，以技术创新为驱动、不断提升服务品质，票务业务覆盖全国12000多家影院，为用户提供更多选择。同时，公司还通过优惠券、会员卡等营销玩法，不断降低电影票价，让用户享受到更加实惠的价格。
                        </p>
                        <p> 未来，我们将继续秉承“让电影票更划算”的理念，不断创新服务模式，提升用户体验。同时，公司还将加强与合作伙伴的深度合作，共同推动电影产业的繁荣发展。</p>
                    </div>
                </div>
            </div>
            <div class="data" id="data">
                <div class="item">
                    <p class="num" id="line"></p>
                    <p class="text">院线覆盖</p>
                </div>
                <div class="item">
                    <p class="num" id="onlineApp"></p>
                    <p class="text">上线应用</p>
                </div>
                <div class="item">
                    <p class="num" id="totalTicket"></p>
                    <p class="text">累计出票</p>
                </div>
                <div class="item">
                    <p class="num" id="customer"></p>
                    <p class="text">服务客户</p>
                </div>
            </div>
        </div>
    </div>
    <!-- content-end -->
    <!-- 公司资质 -->
    <div class="qualifications">
        <div class="contentCenter">
            <div class="warpTitleBox">
                <h2 class="title">公司资质</h2>
            </div>
            <div class="qualificationList">
                <img src="~/assets/images/about/1.png" alt="">
                <img src="~/assets/images/about/2.png" alt="">
                <img src="~/assets/images/about/3.png" alt="">
                <img src="~/assets/images/about/4.png" alt="">
                <img src="~/assets/images/about/5.png" alt="">
            </div>
        </div>
    </div>
    <!-- 公司资质-end -->
    <!-- contactUs -->
    <div class="contactUs">
        <div class="contentCenter">
            <div class="warpTitleBox">
                <h2 class="title">联系我们</h2>
            </div>
            <div class="content">
                <div class="contactInformation">
                    <div class="address item">
                        <div class="icon">
                            <img src="~/assets/images/about/coordinate.svg" alt="">
                        </div>
                        <div class="textBox">
                            <p class="type">地址</p>
                            <div class="info">河南自贸试验区郑州片区（郑东）金水东路85号2号楼2006-2008室</div>
                        </div>
                    </div>
                    <div class="phone item">
                        <div class="icon">
                            <img src="~/assets/images/about/phone.svg" alt="">
                        </div>
                        <div class="textBox">
                            <p class="type">商务合作</p>
                            <div class="info">15515755308</div>
                        </div>
                    </div>
                    <div class="customerService item">
                        <div class="icon">
                            <img src="~/assets/images/about/customerService.svg" alt="">
                        </div>
                        <div class="textBox">
                            <p class="type">客服电话(7*24小时)</p>
                            <div class="info">400-017-9858</div>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <!-- <img src="~/assets/images/about/map.png" alt=""> -->
                </div>
            </div>
        </div>
    </div>
    <!-- contactUs-end -->
  </template>

  <style scoped lang="scss">

@media(max-width: 1200px) {
    .qualifications{
    div.qualificationList{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        &>*{
            width: 80%;
            margin: 20px;
        }
    }
    }
    .banner{
        img{
            width: 100%;
        }
    }
    .contactUs {
        .content {
            .contactInformation {
                flex-direction: column;

                .item {
                    width: 100% !important;
                    margin-bottom: 16rem;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }

            }

            .map {
                margin: 16rem 0 !important;

                img {
                    width: 100%;
                }
            }
        }
    }

    .data {
        flex-wrap: wrap;

        .item {
            width: 48%;

            &:nth-child(1),
            &:nth-child(2) {
                margin-bottom: 16rem;
            }

            .num {
                font-size: 24rem !important;
            }
        }
    }

    .contentMain {
        background: none !important;
        margin-top: 0 !important;
        padding-bottom: 0 !important;

        .contentCenter {
            .desc {
                .textBox {
                    background: url('@assets/images/about/mobileBG.png');

                    .title {
                        display: none;
                    }

                    .text {
                        color: $c4e;
                    }
                }

                &>img {
                    display: none;
                }
            }
        }
    }

}
.qualifications{
    margin-bottom: 50px;
.qualificationList{
    display: grid;
    grid-gap: 0 20px;
    grid-template-columns: 0.9fr 1.1fr 1.1fr 1.1fr 1.1fr ;
    align-items: center;
    &>*{
        width: 100%;
    }
}
}

.contactUs {
    background: linear-gradient(180deg, #F5FAFF 0%, #FFFFFF 100%);
    .contentCenter {
        overflow: hidden;
    }

    h2 {
        text-align: center;
        color: $text-color-primary;
    }

    .content {
        .map {
            margin: 24px 0 48px 0;
        }

        .contactInformation {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item {
                background: url('@assets/images/about/elbg.png') no-repeat bottom right, linear-gradient(180deg, #EBF3FF 0%, #F3F8FF 100%);
                background-size: 30%;
                $iconw: 44px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 24px;
                width: 30%;
                box-sizing: border-box;

                .textBox {
                    flex: 1;

                    p {
                        margin: 0;
                        margin-bottom: 8px;
                        font-weight: bold;
                    }

                    .info {
                        color: $text-color-regular;
                    }
                }

                .icon {
                    width: $iconw;
                    height: $iconw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: white;
                    border-radius: $iconw;
                    margin-right: 16px;
                }
            }
        }

    }
}


.banner {
    width: 100%;
    position: relative;
    height: auto;
    .bgImg{
        width: 100%;
        height: auto;
    }
    .lightImg{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        height: auto;
    }
}

.contentMain {
    background: url('@assets/images/about/contentBGIMg.png') right bottom no-repeat;
    padding-bottom: 46px;

    .data {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding-top: 46px;

        p {
            margin: 0;
        }

        .num {
            color: $blue;
            font-size: $firstLevel;
            font-weight: bold;
            margin-bottom: 8px;
        }
    }

    .desc {
        display: flex;
        align-items: stretch;
        justify-content: center;

    }

    .textBox {
        // background: url('@assets/images/about/strIcon.svg') no-repeat left 40%, @blue;
        word-wrap: break-word;
        font-size: $fourthLevel;
        .title {
            font-size: $secondLevel;
            padding-bottom: 20px;
            margin-top: 0;
            text-align: center;
        }

        .text {
            line-height: 160%;

            p {
                text-indent: 2em;
                &:first-child {
                    margin-top: 0;
                }
            }
        }
    }
}
</style>