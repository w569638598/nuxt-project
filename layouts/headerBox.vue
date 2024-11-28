<template>
  <div v-if="!isMobile" class="header flex flexalignCenter flexjustifyCenter publicHeader">
    <div class="inner flex flexalignCenter flexBetween">
      <img src="~/assets/images/index/logo_header.png" alt="" style="cursor: pointer;" />
      <img class="mobileMenuIcon" src="~/assets/images/header/menuIcon.svg" alt="">
      <div class="flex flexalignCenter navList">
        <div :class="[activeNav == 'index' ? 'active' : '']"><NuxtLink to="/">首页</NuxtLink></div>
        <div class="hasChild"
          :class="[(activeNav == 'saas' || activeNav == 'movieCard' || activeNav == 'taobao' || activeNav == 'openPlatform') ? 'active' : '']">
          <div class="parentNav">产品服务</div>
          <div class="childNav">
            <div class="navBox">
              <ul>
                <li :class="[activeNav == 'saas' ? 'active' : '']">
                  <NuxtLink to="/saas">
                  <div class="productItem flex flexalignCenter">
                    <img src="~/assets/images/index/saas.svg" alt="" srcset="" />
                    <div class="textBox">
                      <p class="title">SaaS系统</p>
                      <p class="desc">一键授权，搭建属于自己的电影票营销购票系统</p>
                    </div>
                  </div></NuxtLink>
                </li>
                <li :class="[activeNav == 'movieCard' ? 'active' : '']">
                  <NuxtLink to="/movieCard">
                  <div class="productItem flex flexalignCenter">
                    <img src="~/assets/images/index/movieCard.png" alt="" srcset="" />
                    <div class="textBox">
                      <p class="title">电影卡券</p>
                      <p class="desc">基于SaaS系统，批量创建电影卡/券，随时兑换购票</p>
                    </div>
                  </div></NuxtLink>
                </li>
                <li :class="[activeNav == 'taobao' ? 'active' : '']">
                  <NuxtLink to="/taobao">
                  <div class="productItem flex flexalignCenter">
                    <img src="~/assets/images/index/taobao.png" alt="" srcset="" />
                    <div class="textBox">
                      <p class="title">淘宝电商</p>
                      <p class="desc">识图报价、自动出票、提高工作效率，节约人力成本</p>
                    </div>
                  </div></NuxtLink>
                </li>
                <li :class="[activeNav == 'openPlatform' ? 'active' : '']">
                  <NuxtLink to="/openPlatform">
                  <div class="productItem flex flexalignCenter">
                    <img src="~/assets/images/index/apiNav.png" alt="" srcset="" />
                    <div class="textBox">
                      <p class="title">API接口</p>
                      <p class="desc">标准化API接口接入服务，满足使用者自定义开发需求</p>
                    </div>
                  </div>
                </NuxtLink>
                </li>
              </ul>
            </div>
            <span class="arrow"></span>
          </div>
        </div>
        <!-- <div @click="openPage('saas.html')" :class="[activeNav == 'saas' ? 'active' : '']">
          SaaS系统</div> -->
        <!-- <div @click="openPage('douyin.html')" :class="[activeNav == 'douyin' ? 'active' : '']">
          直播/短视频</div>
        <div @click="openPage('openPlatform.html')" :class="[activeNav == 'openPlatform' ? 'active' : '']">
          开放平台</div> -->
        <div :class="[activeNav == 'news' || activeNav == 'newsDetail' ? 'active' : '']">
          <NuxtLink to="/news">
          资讯中心</NuxtLink></div>
        <div :class="[activeNav == 'about' ? 'active' : '']"><NuxtLink to="/about">关于我们</NuxtLink></div>
        <div class="btn" @click="login">进入控制台</div>
      </div>
    </div>
  </div>
  <mobile-header v-if="isMobile"></mobile-header>
</template>

<script setup>
import mobileHeader from '~/layouts/mobileHeader.vue';
import { ref, watch, onMounted } from "vue"
const route = useRoute()

const activeNav = ref('')
activeNav.value = route.name
watch(route, (n) => {
  activeNav.value = route.name
})
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth <= 1200;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1200
  })
})

watch(isMobile, (val) => {
  if (val) {
    (function (doc, win, designWidth) {
      const html = document.documentElement;
      const refreshRem = () => {
        const clientWidth = html.getBoundingClientRect().width;
        html.style.fontSize = clientWidth / designWidth + "px";
      }
      doc.addEventListener("DOMContentLoaded", refreshRem)
    })(document, window, 375)
  }
})

const login = () => {
  location.href = 'https://pub.yhs.cn/#/login'
}

function openPage(path) {
  window.location.href = path
}
</script>

<style lang="scss" scoped>



.el-dropdown-link:focus {
  outline: none;
}

$boxShadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

.mobileMenuIcon {
  display: none;
}

.header {
  height: 80px;
  position: relative;
  z-index: 99;

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
            right: -18px;
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

                .textBox {
                  .title {
                    font-size: 16px;
                    color: var(--fc-1d)
                  }

                  .desc {
                    font-size: 12px;
                    color: var(--fc-4e)
                  }

                  p {
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
</style>