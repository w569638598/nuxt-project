<template>
    <div>
        <p class="title" v-if="props.type !== 'mobile'">{{ props.title }}</p>
        <ul class="newsTopBox" v-if="newsList.length">
            <li v-for="(item, index) in newsList " :key="index" class="newsTopList">
                <nuxt-link :to="{path:'newsDetail', query:{id:item.id}}">
                    <span class="index"
                        :class="[index == 0 ? 'first' : index == 1 ? 'second' : index == 2 ? 'third' : '']">{{ index + 1
                        }}</span>
                    {{ item.title }}
                </nuxt-link >
            </li>
        </ul>
        <div v-else class="noData">
            <img class="emptyDataImg" src="~/assets/images/news/emptyData.png" alt="暂无数据" title="暂无数据">
            <p> 暂无数据</p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
const props = defineProps(['title', 'type'])

const newsList = ref([])
const limit = ref(10)
onMounted(() => {
const isMobileP = isMobile()
if (isMobileP) {
    limit.value = 5
}
})
function openPage(item) {
    window.location.href = `/newDetail.html?id=${item.id}`
}
function getNewsHot() {
    api.get('website/article/list', {
        data: { category: 7, limit: limit.value }
    }).then(e => {
        newsList.value = e.data.data
    })
}
getNewsHot()
</script>

<style lang="scss" scoped>

.title {
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: solid 1px $border-color-regular;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.newsTopBox {
    li.newsTopList {
        display: flex;
        align-items: center;
        margin: 12px 0;
        font-size: 14px;
        color: $text-color-primary;
        padding: 0 12px;
        cursor: pointer;

        a {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            width: 80%
        }

        .index {
            font-size: 18px;
            color: #AEB9C3;
            font-style: italic;
            font-weight: bold;
            margin-right: 12px;
            display: inline-block;
            width: 20px;
        }

        .first {
            color: #FF3232;
        }

        .second {
            color: #FF8832;
        }

        .third {
            color: #FFB340
        }
    }
}
</style>