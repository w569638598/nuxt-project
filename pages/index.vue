<template>
  <div class="home">
      <div class="bannerBox">
          <div class="banner">
              <div class="innerBox flex flexalignCenter">
                  <div class="left">
                      <h1 class="title" style="margin: 0;">影划算 • 全国优惠电影票资源提供商</h1>
                      <h3 class="desc" style="font-weight: normal;">
                          提供全国12000多家电影院在线购票服务、一手票务资源，无中间商赚差价。
                      </h3>
                  </div>
                  <img src="~/assets/images/index/index_banner_mobile.png" alt="" srcset="" />

              </div>
          </div>
      </div>
      <div class="advantageBox">
          <div class="warpTitleBox wow animate__slideInDown">
              <h2 class="title contentTitle">项目优势</h2>
          </div>
          <div class="list flex flexBetween">
              <div class="listItem animate__fadeInLeft" v-for="(item, i) of list">
                  <div class="title">{{ item.title }}</div>
                  <div class="desc">{{ item.desc }}</div>
                  <img :src="item.img" alt="" />
              </div>
          </div>
      </div>
      <!-- 模式 -->
      <div class="mode">
          <div class="contentCenter">
              <div class="warpTitleBox wow animate__slideInDown">
                  <h2>合作模式</h2>
                  <p class="desc">6大合作模式，满足您的各项功能需求</p>
              </div>
              <div class="tabBox partner-tab">
                  <div class="tabWrap" :class="[isMobile ? 'mobileTabxBox' : '']">
                    <div class="item" :class="[modeTabIndex === i ? 'active' : '']" v-for="(item, i) of talList"
                            @mouseover="changeModeTab(i)">
                            <img :src="item.img" alt="">
                            <p class="text">{{ item.text }}</p>
                        </div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentCenter">
                  <div class="conBox">
                      <div class="item" v-for="item of modeContent[modeTabIndex]">
                        <div class="title">{{ item.title }}</div>
                            <div class="desc">
                                {{ item.desc }}
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- 模式-end -->
      <!-- 合作流程 -->
      <div class="stepBox">
          <stepBox title="合作流程" :textList="stepBoxTextList" />
      </div>
      <!-- 合作流程-end -->
      <!-- 体验 -->
      <div class="experience">
          <div class="contentCenter">
              <div class="textWrap">
                  <div class="title">影划算电影票邀您携手，共赴蓝海市场</div>
                  <button onclick="window.open('https://pub.yhs.cn', '_blank')">立即体验</button>
              </div>
              <img src="~/assets/images/index/experience.png" alt="">
          </div>
      </div>
      <!-- 体验-end -->
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import stepBox from '~/components/stepBox.vue';

const isMobile  = ref()
// 项目优势
import img1 from '~/assets/images/index/project_advantages-1.png'
import img2 from '~/assets/images/index/project_advantages-2.png'
import img3 from '~/assets/images/index/project_advantages-3.png'
const list = [
  {
      title: '需求庞大、复购率高',
      desc: '票房连年增长，不断刷新票房记录；电影创作质量逐步向优质靠近，好片数量逐渐加大；观影人群不断拓宽，年龄层次更广泛、观影频率逐步提升。',
      img: img1
  }, {
      title: '利润空间大',
      desc: '电影行业属周期性行业，口碑好片数量多，票房高，则利润越高；平均出票利润为10％—15％，单张票利润最高60%。',
      img: img2
  }, {
      title: 'CPS多重变现、极易推广裂变',
      desc: '合作模式多样化，支持接入API/小程序/公众号/H5，推广方式多渠道、多场景、多形式；',
      img: img3
  }
]

// 合作模式
import h5 from '~/assets/images/index/h5.png'
import app from '~/assets/images/index/app.png'
import gzh from '~/assets/images/index/gzh.png'
import wechatMInip from '~/assets/images/index/wechatMInip.png'
import alipayMinip from '~/assets/images/index/alipayMinip.png'
import api from '~/assets/images/index/api.png'
onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  if (!isMobile.value) {
      const tabs = document.querySelectorAll('.tabBox .item')
      for (let i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('mouseover', () => {
              changeModeTab(i)
          })
      }
  }
  // 动画
inScreenAnimation('.advantageBox .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.mode .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})

inScreenAnimation('.stepBox .warpTitleBox', e => {
  e.classList.add('animate__slideInUp', 'animate__animated')
})
})
const modeTabIndex = ref(0)
function changeModeTab(index) {
  modeTabIndex.value = index
}
const talList = [
  {
      img: h5,
      text: 'H5链接'
  }, {
      img: app,
      text: 'APP嵌入'
  }, {
      img: gzh,
      text: '公众号接入'
  }, {
      img: wechatMInip,
      text: '微信小程序'
  }, {
      img: alipayMinip,
      text: '支付宝小程序'
  }, {
      img: api,
      text: 'API接口'
  }
]
const modeContent = [[
  {
      title: '适用客户',
      desc: '适合社群推广类与福利公众号运营团队/个人，无需开发，快速接入。'
  }, {
      title: '功能特点',
      desc: '一键创建功能完善的H5售票系统，专属推广链接，1分钟上线。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
],
[
  {
      title: '适用客户',
      desc: '适合需要跨平台开发且拥有自研App能力技术团队。'
  }, {
      title: '功能特点',
      desc: '只需编写webview代码即可嵌入iOS、Android应用，大大降低开发成本和时间。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
],
[
  {
      title: '适用客户',
      desc: '适合社群推广类与福利公众号运营团队，无需开发，快速接入。'
  }, {
      title: '功能特点',
      desc: '等同于H5链接方式接入，一键创建专属推广链接，可设置到公众号菜单。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
],
[
  {
      title: '适用客户',
      desc: '适合非个人微信小程序（需完成工信部备案）。'
  }, {
      title: '功能特点',
      desc: 'SaaS系统一键授权、免运维开发，无需购买服务器域名资源，快速拥有功能强大售票小程序系统。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
],
[
  {
      title: '适用客户',
      desc: '适合非个人支付宝小程序（需完成工信部备案）。'
  }, {
      title: '功能特点',
      desc: 'SaaS系统一键授权、免运维开发，无需购买服务器域名资源，快速拥有功能强大售票小程序系统。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
],
[
  {
      title: '适用客户',
      desc: '适合具备前后端研发能力的企业技术团队。'
  }, {
      title: '功能特点',
      desc: '提供健全的接口文档及技术指导，高效对接，省时省力，接入方可自行调整售票价格，满足自己的个性化需求。'
  }, {
      title: '合作费用',
      desc: '永久免费。'
  }, {
      title: '结算方式',
      desc: '实时结算（电影放映结束2h后）。'
  },
]]
// 合作流程
const stepBoxTextList = ['注册登录', '合作签约', '应用搭建', '上线推广']
</script>

<style lang="scss" scoped>
.mobileTabxBox{
    &>*{
        margin-right: 12rem;
        padding: 0 6rem;
    }
}
.el-dropdown-link:focus {
    outline: none;
  }
  
  $boxShadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  
  // .solutionActive {
  //           .parentNav {
  //             color: @blue;
  //           }
  //         }

  .header {
    height: 80px;
    position: relative;
    z-index: 9999999999999999999;
  
    .inner {
      width: 1200px;
  
      .navList {
  
        .hasChild {
          position: relative;
  
          &:hover {
            .childNav {
              height: auto;
              padding: 12px;
            }
          }
  
          .parentNav {
            &::after {
              content: '';
              position: absolute;
              right: -20px;
              margin-top: 2.5px;
              width: 7px;
              height: 7px;
              border-style: solid;
              border-width: 1px;
              border-color: transparent transparent #ccc #ccc;
              transform: rotate(-45deg);
            }
          }
  
          .navBox {
            box-shadow: $boxShadow;
            border: 1px solid #e4e7ed;
            background: white;
  
          }
  
          .childNav {
            position: absolute;
            inset: 28px auto auto 50%;
            transform: translate(-50%, 0);
            transition: all .2s;
            height: 0;
            overflow: hidden;
  
            ul {
              margin: 0;
              padding: 6px 0;
              z-index: 10;
  
              .active {
                color: $blue;
              }
  
              li {
                list-style: none;
                display: flex;
                align-items: center;
                white-space: nowrap;
                list-style: none;
                line-height: 22px;
                padding: 12px 16px;
                margin: 0;
                cursor: pointer;
                outline: 0;
                color: $text-color-regular;
  
                .productItem {
                  img {
                    width: 40px;
                    height: 40px;
                    margin-right: 8px;
                  }
                  .textBox{
                    .title{
                      font-size: 16px;
                      color: var(--fc-1d)
                    }
                    .desc{
                      font-size: 12px;
                      color: var(--fc-4e)
                    }
                    p{
                      margin: 0;
                    }
                  }
                }
              }
            }
  
            .arrow {
              position: absolute;
              top: 8px;
              right: 50%;
              width: 10px;
              height: 10px;
              // box-shadow: @boxShadow;
              background: white;
              z-index: 1;
              display: block;
              transform: rotate(45deg);
            }
  
          }
        }
  
        &>div {
          font-size: $fourthLevel;
          margin-right: 80px;
          position: relative;
          cursor: pointer;
          border-bottom: 3px solid transparent;
  
          &:last-child {
            margin-right: 0;
          }
  
  
  
          &.active {
            color: #2168ff;
            border-bottom: 3px solid #2168ff;
            padding-bottom: 6px;
          }
  
          &.btn {
            cursor: pointer;
            font-size: $comLevel;
            text-align: center;
            width: 90px;
            height: 36px;
            line-height: 36px;
            padding: 0;
            border-radius: 2px;
            color: #fff;
            background-color: $btn-bg-blue;
            display: inline-block;
          }
  
          .line {
            height: 3px;
            width: 100%;
            background-color: #2168ff;
            position: absolute;
            bottom: -4px;
            left: 0;
          }
        }
      }
  
      img {
        width: 200px;
        height: 50px;
      }
    }
  }
@media(max-width: 1200px) {
    .mobileMenuIcon {
        display: block;
      }
    .banner {
        width: 100% !important;
        min-width: 100% !important;
        background: #E2E8F0 !important;
        padding-top: 26px;
        .innerBox {
            @include centerWrap;
            overflow: hidden;
            display: block;
            .left{
                text-align: center;
                margin-right: 0 !important;
                position: relative;
                z-index: 2;
                .title{
                    font-size: 20px;
                    line-height: 28px;
                }
                .desc{
                    margin-top: 5rem;
                }
            }
            img{
                width: 80%;
                margin: 0 auto;
                display: block;
                position: relative;
                z-index: 1;
                top: -80px;
            }
        }
    }
    .advantageBox{
        padding-bottom: 0 !important;
        &>.title{
            font-size: $mobileTitleFs !important;
            padding: $titlePadding !important;
        }
        .list {
            flex-direction: column;
            @include centerWrap;
            .listItem {
                width: 100% !important;
                margin-bottom: 20px;
                background-size: auto !important;
                &:last-child{
                    margin-bottom: 0!important;
                }
            }
        }
    }
    .mode{
        .tabBox{
            display: block !important;
            overflow: scroll;
            .tabWrap{
                width: 120%;
                display: flex;
                justify-content: space-between;
                p{
                    white-space: nowrap;  
                }
            }
            img{
                display: none;
            }
        }
        .conBox{
            flex-direction: column;
            .item{
                width: 100% !important;
                margin-bottom: 17px;
                
            }
        }
    }
    
    .experience{
        .contentCenter{
            justify-content: space-between !important;
            padding: 16rem !important;
            img{
                position: static !important;
                width: 100rem !important;
            }
        }
        .textWrap{
            margin-right: 0 !important;
            margin-top: 0!important;
            .title{
                font-size: 18px !important;
                line-height: 160% !important;
            }
            button{
                padding: 4rem 18rem !important;
            }
        }
    }
}

// 体验
.experience {
  background: linear-gradient(90deg, #EFF6FF 0%, #CDE5FF 100%);
  overflow: hidden;
  $imgw: 230px;

  img {
      width: $imgw;
      bottom: -50px;
      position: absolute;
      height: auto;
  }

  .contentCenter {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      padding: 40px;

      .textWrap {
          margin-right: calc($imgw + 11%);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 44px;

          .title {
              font-size: 24px;
              font-weight: bold;
              line-height: 40px;
          }

          button {
              background: none;
              border: solid 1px $text-color-primary;
              color: $text-color-primary;
              font-size: 14px;
              font-weight: bold;
              padding: 10px 24px;
              margin-top: 14px;
              cursor: pointer
          }
      }
  }
}


.mode {
  .content {
      background: linear-gradient(180deg, #EDF5FF 0%, #F6FBFF 100%);
      overflow: hidden;

      .conBox {
          padding: 40px 0;
          display: flex;
          align-items: top;

          &.magictime {
              -webkit-animation-duration: .3s;
              animation-duration: .3s;
          }

          justify-content: space-between;

          .item {
              padding: 20px;
              border-radius: 2px;
              border: 1px solid #E1E7EE;
              background: url('~/assets/images/index/modeItemBg.svg'), linear-gradient(180deg, #F7FBFF 0%, #FFF 100%);
              text-align: left;
              width: calc(100% / 4);
              height: 180px;
              box-sizing: border-box;

              .title {
                  color: var(---, #1D2129);
                  font-size: $thirdLevel;
                  font-weight: bold;
                  line-height: 26px;
                  border-bottom: solid 1px #ccc;
                  padding-bottom: 12px;
              }

              .desc {
                  margin-top: 12px;
                  line-height: 160%;
                  font-size: 14px;
              }
          }

          .item:not(:last-child) {
              margin-right: 32px;
          }
      }
  }

  .tabBox {
      .tabWrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }

      .item {
          width: calc(100% / 6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all .6s;
          padding-bottom: 4px;
          box-sizing: content-box;
          border-bottom: solid 4px transparent;

          &:hover {
              cursor: pointer;
          }

          img {
              width: 64px;
          }
      }

      .active {
          background: linear-gradient(180deg, #FFF 0%, #EBF5FF 100%);
          border-bottom: solid 4px $blue;
      }
  }
}

img {
  width: 440px;
  height: 100%;
  object-fit: contain;
}

.advantageBox {
  text-align: center;

  &>.title {
      font-size: $secondLevel;
      font-weight: 600;
      padding: 44px 0;
  }

  .list {
      width: 1200px;
      margin: 0 auto;

      .listItem {
          width: 30%;
          border: 1px solid $border-color-primarry;
          border-radius: 2px;
          padding: 20px 1.5% 0;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.3s;
          background: url('~/assets/images/index/project_advantages.png') center bottom no-repeat, linear-gradient(180deg, #F6F9FF 0%, #E8F1FF 100%);
          background-size: 250px 266px;

          &:hover {
              transform: translateY(-10px);
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              // transform: scale(1.1);
          }

          $imgw: 188px;

          img {
              width: $imgw;
              height: $imgw;
              float: right;
          }

          .title {
              margin: 12px 0;
              font-size: $thirdLevel;
              font-weight: bold;
              text-align: left;
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