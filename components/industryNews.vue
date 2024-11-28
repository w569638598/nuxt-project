<template>
    <div>
        <p  v-if="props.type !== 'mobile'" class="title">行业动态</p>
        <ul class="newsTopBox industryNewsBox" v-if="newsList.length">
            <li v-for="(item, index) in newsList " :key="index" class="newsTopList">
                <nuxt-link :to="{path:'newsDetail', query:{id:item.id}}">
                    <div class="pictureBox">
                        <img class="picture" :src="item.image" alt="" />
                    </div>
                    <div class="textBox">
                        <p class="title">{{ item.title }}</p>
                        <p class="time fc-86 otherInfo">
                            <img src="~/assets/images/news/timeIcon.svg" alt=""> {{ item.create_time }}
                        </p>
                    </div>
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
const limit = ref(5)
onMounted(() => {
const isMobileP = isMobile()
if (isMobileP) {
    limit.value = 3
}
})
function openPage(item){
    window.location.href= `/newDetail?id=${item.id}`
}
function getNewsHot() {
    api.get('website/article/list', {
        data: { category: 6,limit: limit.value }
    }).then(e => {
        newsList.value = e.data.data
    })
}
getNewsHot()
</script>

<style lang="scss" scoped>

.industryNewsBox {
    .newsTopList {
        margin: 12px 0;
    font-size: 14px;
    padding: 0 12px;
        .textBox {
            height: 80px;
            margin-left: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: calc(100% - 83px);

            .title {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                -webkit-line-clamp: 2;
                color: #4E5969;
                margin: 8px 0 10px 0;
                white-space: pre-line !important;
            }

            .time {
                margin: 0;
            }
        }
    }
}
.title {
    font-size: 14px;
    font-weight: bold;
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.newsTopBox {
    li.newsTopList {
        font-size: 14px;
        padding: 0 12px;

        a {
            justify-content: flex-start;
            display: flex;
            align-items: center;
            cursor: pointer;
            .pictureBox {
                width: 128px;
                height: 76px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .textBox {
                flex: 1;
                p{
                    img{
                        margin-right: 3px !important;
                    }
                }
            }

            .title {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-top: 0;
            }
        }
    }
}
</style>