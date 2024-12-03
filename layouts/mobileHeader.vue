<template>
    <div class="mobileMenu">
        <img class="logo" src="~/assets/images/index/logo_header.png" @click="openPage('/')" alt="" />
        <div class="menu">
            <img v-if="!isOpenMenu" @click="isOpenMenu = true" class="mobileMenuIcon"
                src="~/assets/images/header/menuIcon.svg" alt="">
            <img v-else @click="isOpenMenu = false" class="mobileMenuIcon" src="~/assets/images/header/menuCloseIcon.svg"
                alt="">
            <ul class="menuList" v-if="isOpenMenu">
                <li v-for="(nav, i) of navList"
                    :class="[nav.children ? 'hasChildren' : '', 'navItem', nav.isOpenChildren ? 'openedChildren' : 'closedChildren']">
                    <div class="navItemBox" :class="['navItem', isActiveNav(nav.page) ? 'active' : '']">
                        <nuxt-link :to="{path:nav.path}" class="flbc">
                        <span class="text">{{ nav.text }}</span>
                        <img class=" arrow" @click="nav.isOpenChildren = !nav.isOpenChildren"
                            v-if="nav.children && !nav.isOpenChildren" src="~/assets/images/header/arrow.svg" alt="">
                        <img class="addIcon" v-else-if="nav.children && nav.isOpenChildren"
                            @click="nav.isOpenChildren = !nav.isOpenChildren" src="~/assets/images/header/addIcon.svg"
                            alt="">
                        </nuxt-link>
                    </div>
                    <ul v-if="nav.children && nav.isOpenChildren">
                        <li v-for="(cNav, i) of nav.children">
                            <div class="navItemBox" :class="['navItem', isActiveNav(cNav.page) ? 'active' : '']">
                                <nuxt-link :to="{path:cNav.path}">
                                <span class="text">{{ cNav.text }}</span>
                            </nuxt-link>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const route = useRoute()
const activeNav = ref('')
activeNav.value = route.name
watch(route, (n) => {
    activeNav.value = route.name;
    isOpenMenu.value = false
})

const isActiveNav = computed(() => {
    return (name) => {
        if(typeof name === 'string'){
            return name === activeNav.value
        }else if(name instanceof Array){
            return name.includes(activeNav.value)
        }
    }
})

const isOpenMenu = ref(false)
const navList = ref([
    {
        text: '首页',
        path: '/',
        page: 'index'
    },

    {
        text: '产品服务',
        path: '/',
        isOpenChildren: true,
        children: [
            {
                text: 'SaaS系统',
                path: 'saas',
                page: 'saas'
            },
            {
                text: '电影卡券',
                path: 'movieCard',
                page: 'movieCard'
            },
            {
                text: '淘宝电商',
                path: 'taobao',
                page: 'taobao'
            },
            {
                text: 'API接口',
                path: 'openPlatform',
                page: 'openPlatform'
            }
        ]
    },

    {
        text: '资讯中心',
        path: 'news',
        page: ['news', 'newsDetail']
    },
    {
        text: '关于我们',
        path: 'about',
        page: 'about'
    }
])
function openPage(nav) {
    if (nav.children) return;
    window.open(nav.path, '_self')
}
</script>

<style lang="scss" scoped>
@import '~/assets/base.scss';

div.active {
    border-left: solid 3rem $blue;

}

.mobileMenu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    position: relative;
    z-index: 99;

    .logo {
        width: 150px;
    }

    .menu {
        position: relative;

        .closedChildren {
            border-bottom: none !important;

            .navItemBox {
                border-bottom: none !important;
                padding-bottom: 0 !important;
            }
        }

        .openedChildren {
            padding-bottom: 0;

            &>div.navItemBox {
                padding-bottom: 12px !important;
            }
        }

        .hasChildren {
            border-bottom: solid 1px $border-color-primarry;

            &>div {
                border-bottom: solid 1px $border-color-primarry;
                padding-bottom: 12PX;
            }

            li {
                padding-left: 0;
            }
        }

        .menuList {
            position: absolute;
            height: 100vh;
            background: white;
            width: 276px;
            right: -16px;

            .addIcon {
                width: 14px;
            }

            .navItem {
                .navItemBox {
                    padding: 0 16px;
                }
            }
        }

        .arrow {
            width: 26px;
        }

        .mobileMenuIcon {
            width: 24px;
            height: 24px;
        }
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            font-size: 14px;
            padding: 12px 0;
        }
    }
}
</style>