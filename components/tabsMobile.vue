<template>

<div class="tabs-wrap">
    <div class="tabs flsc">
        <div v-for="item of tabs" :class="curTab === item.value ? 'active' : ''" @click="curTab = item.value">{{ item.label }}</div>
    </div>
    <div class="tabs-content">
            <newsCom type="mobile" v-if="curTab === 'news'"></newsCom>
            <industryNewsCom type="mobile" v-else-if="curTab === 'industry'"></industryNewsCom>
        </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import newsCom from './newsTop.vue'
import industryNewsCom from './industryNews.vue';
const curTab = ref('news')
const tabs = ref([{
    label: '新闻头条',
    value: 'news'
}, {
    label: '行业资讯',
    value: 'industry'
},
])
</script>

<style lang="scss" scoped>
.tabs-wrap{
    padding: 0 16px;
}
.tabs{
    height: 36px;
    border-bottom: solid 1px $border-color-primarry;
    &>*{
        margin-right: 16px;
        position: relative;
        &::after{
            transition: all .3s ease;
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: $blue;
            position: absolute;
            bottom: -9px;
            opacity: 0;
        }
    }
    .active{
        color: $blue;
        font-weight: bold;
        &::after{
            opacity: 1;
        }
    }
}
</style>