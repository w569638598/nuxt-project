<template>

<div class="contetn">
        <div class="contentCenter" v-if="!isMobile">
            <div id="listBox"><list /></div>
            
            <div class="rightBox">
                <newsTop id="newsTop" title="新闻头条" />
                <industryNews />
            </div>
        </div>
        <div class="contentCenter" v-else>
            <div id="newsTopM" title="新闻头条"><newsTop /></div>
            <div id="listBoxM"><list /></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'element-plus/dist/index.css';

useSeoMeta({
        title: '影划算电影票 - 资讯中心',
        meta: [
            { name: 'keywords', content: '影划算电影票,影划算票务,电影票接口,电影票API,电影票SaaS系统,电影票小程序,特价影票,5折电影票,特惠电影票,电影票学生价,电影票订购平台' },
            { name: 'description', content: '影划算电影票是国内观众喜爱的观影平台，为您提供了在线购票服务。同时，影划算电影票还为您提供电影预告片、票房查询、电影排行榜、影视资讯等信息。' }
        ]
    })


const isMobile = ref()
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
})
</script>

<style lang="scss" scoped>

@media(max-width: 1200px) {
    .contentCenter {
        .industryNewsBox {
            .pictureBox{
                width: 106px !important;
                height: 64px !important;
            }
        }
        #newsTopM {
            background: white;

            .title {
                padding: 6px 0 6px 12px;
            }

            .newsTopList {
                padding-left: 0;
                padding-right: 0;
            }

            .industryNewsBox {
                .textBox {
                    height: 64px;
                    margin-left: 8px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: calc(100% - 114px);
                    .title{
                        width: 100% !important;
                    }
                }

                a {
                    align-items: flex-start;
                }

                .time {
                    margin: 0;
                }

                .title {
                    padding: 0;
                    margin: 0;
                    display: block;
                }
            }

            padding-bottom: 12px;
        }




        
    }
}

.contetn {
    background: $bodybgc;
    padding: 16px 0;
}

#listBox {
    width: 70%;
}

.contetn {
    .contentCenter {
        .rightBox {
            width: 28%;
            display: flex;
            flex-direction: column;

            &>* {
                background: white;
            }

            #newsTop {
                margin-bottom: 22px;
            }

            p {
                padding-left: 12px;
            }
        }
    }

}


:deep(){
    p.title,p.time {
            padding-left: 12px;
        }
.contentCenter {
    display: flex;
    justify-content: space-between;

    .pagination {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    
    ul:not(.el-pager) {
        padding-left: 0;
        margin-top: 0;

        

            p:not(.otherInfo) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                -webkit-line-clamp: 2;
                color: $text-color-regular;
                margin: 8px 0 ;
                height: 40px;
            }

            .otherInfo {
                &>:first-child {
                    margin-right: 46px;
                }

                span {
                    color: $text-color-secondary;

                    img {
                        margin-right: 4px;
                    }
                }
            }

            .otherInfo,
            .otherInfo span {
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
        
    }
}
}

:deep(.noData) {
    .emptyDataImg {
        width: 30%;
        display: block;
        margin: 0 auto
    }

    p {
        text-align: center;
        color: var(--fc-86);
    }
}
</style>