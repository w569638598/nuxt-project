<template>
    <div>
        <div v-if="list.length">
            <ul class="listBox">
                <li v-for="item in list">
                    <nuxt-link :to="{path:'newsDetail', query:{id:item.id}}">
                    <div class="listBox-item-info">
                        <h3>
                            {{ item.title }}
                        </h3>
                        <p>
                            {{ item.desc }}
                        </p>
                        <p class="otherInfo">
                            <span class="time">
                                <img src="~/assets/images/news/timeIcon.svg" alt=""> {{ item.create_time }}
                            </span>
                            <span class="personal">
                                <img src="~/assets/images/news/personal.svg" alt=""> {{ item.author }}
                            </span>
                        </p>
                    </div>
                    <div class="listBox-item-img">
                        <img :src="item.image" alt="">
                    </div>
                </nuxt-link>
                </li>
            </ul>
            <div class="pagination">
                <el-pagination background :page-size="limit" @change="toPage" layout="prev, pager, next"
                    :total="total" />
            </div>
        </div>
        <div v-else class="noData">
            <img class="emptyDataImg" src="~/assets/images/news/emptyData.png" alt="暂无数据" title="暂无数据">
            <p> 暂无数据</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElPagination } from 'element-plus'

const router = useRouter()

const total = ref(0)
const pager = ref(1)
const page = ref(1)
const limit = ref(5)

function toPage(i) {
    page.value = i;
    getData()
}
function getData() {
    api.get('website/article/list', {
        data: {
            category: 5,
            page: page.value,
            limit: limit.value
        }
    }).then(e => {
        list.value = e.data.data
        total.value = e.data.total
        pager.value = Math.ceil(e.data.total / limit.value)
    })
}
getData()


const list = ref([])
</script>

<style lang="scss" scoped>
@media(max-width: 1200px) {
    #listBoxM {
            margin-top: 20px;

            .otherInfo {
                margin-bottom: 0;
                margin-left: 0;

                span {
                    font-size: 12px;
                }

                .time {
                    margin-right: 12px;
                }
            }

            .listBox-item-info {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;
                width: calc(100% - 118px);
            }
        }
        .listBox-item-img {
            width: 106px;
            height: 64px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .listBox-item-info {
            margin-right: 12px !important;
            h3 {
                margin-top: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 100%;
                font-size: 14px !important;
                margin-bottom: 3px;
            }
            p{
                -webkit-line-clamp: 1 !important;
                height: auto !important;
                margin: 0 !important;
                font-size: 12px !important;
            }
        }
}
li {
            list-style: none;
            padding: 20px;
            background: white;
            margin-bottom: 16px;

            h3 {
                font-size: $fourthLevel;
                font-weight: bold;
                color: $text-color-primary;
                margin-top: 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 100%;
            }

            p {
                margin: auto;
            }
        }
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        margin: 0 10px;
        background: #f5f5f5;
        color: #666;
        cursor: pointer;

        &.active {
            background: #fff;
            color: $blue;
        }
    }
}

.listBox-item-info {
    flex: 1;
    cursor: pointer;
    width: calc(100% - 206px);
        margin-right: 26px;
}

li a{
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.listBox-item-img {
    width: 180px;
    overflow: hidden;
    height: 108px;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>