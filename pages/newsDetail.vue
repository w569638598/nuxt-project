<template>

<div class="contetn">
        <div class="contentCenter">
        <div class="header">
            <div class="headerTitle"></div>
            <p class="timerBox flcc">
                <span class="time flcc">
                    <img style="margin-right: 3px;" src="~/assets/images/news/timeIcon.svg" alt=""> 
                    <span class="timeSpan"></span>
                </span>
                    <span class="personal flcc">
                        <img src="~/assets/images/news/personal.svg" alt=""> 
                        <span class="author"></span>
                    </span>
            </p>
        </div>
        <!-- content -->

        <div class="contentMain">
        </div>
    </div></div>
    <!-- footer -->
    <div class="previewImg"></div>
</template>

<script setup>
const route = useRoute()
useSeoMeta({
        title: '影划算电影票 - 资讯中心',
        meta: [
            { name: 'keywords', content: '影划算电影票,影划算票务,电影票接口,电影票API,电影票SaaS系统,电影票小程序,特价影票,5折电影票,特惠电影票,电影票学生价,电影票订购平台' },
            { name: 'description', content: '影划算电影票是国内观众喜爱的观影平台，为您提供了在线购票服务。同时，影划算电影票还为您提供电影预告片、票房查询、电影排行榜、影视资讯等信息。' }
        ]
    })
const isMobileP = isMobile();
    onMounted(() => {


    const herderHeight = document.getElementById('header')?.getBoundingClientRect().height;
    const footerHeight = document.getElementById('footer')?.getBoundingClientRect().height;
    const winH = window.innerHeight;
    $('.contetn').style.minHeight = winH - herderHeight - footerHeight + 'px'
    const hwr = new URLSearchParams(window.location.search)
    console.log(route);
    
    api.get('website/article/detail', {
        data: {
            id: hwr.get('id'),
        }
    }).then(e => {
        if (e.code == 200) {
            const data = e.data
            $('.headerTitle').innerHTML = data.title
            $('.timeSpan').innerHTML = data.create_time
            $('.contentMain').innerHTML = data.content
            if (data.author) {
                $('.author').innerHTML = data.author
            } else {
                $('.personal').style.display = 'none'
            }
            $All('.contentMain img').forEach(e => {
                e.addEventListener('click', e => {
                    
                    $('.previewImg').style.cssText = 'z-index: 999;opacity: 1';
                    if(isMobileP){
                        $('.previewImg').innerHTML = `<img style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: 80vw;height: auto" src=${e.target.src}>`;
                    }else{
                        $('.previewImg').innerHTML = `<img style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: auto;height: 80vh" src=${e.target.src}>`;
                    }
                    // 添加触摸事件监听
                    const previewImg = $('.previewImg');
                    previewImg.addEventListener('touchmove', preventTouchMove, { passive: false });
                })
            })
        } 
    })
$('.previewImg').addEventListener('click', e => {
    $('.previewImg').style.cssText = 'z-index: -100; opcacity: 0';
    const previewImg = $('.previewImg');
    previewImg.removeEventListener('touchmove', preventTouchMove);
})


// 添加客服浮窗
addCustomerService()
})
function preventTouchMove(e) {
    e.preventDefault();
}
</script>

<style lang="scss" scoped>

@media(max-width: 1200px){
    .contetn {
        .contentCenter{
        margin: 16px auto !important;
    }
}
.contentMain{
    *{
        white-space: inherit;
    }
    img{
        width: 100%;
    }
}
}

.headerTitle{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
}
.header{
    border-bottom: solid 1px $border-color-primarry;
    padding: 0 0 20px 0;

}
.timerBox{
    font-size: 12px;
    margin: 0;
    color: var(--fc-4e);
    margin-top: 8px;
    &>*{
        margin: 0 5px;
    }
}
.headerTitle,.timerBox{
    text-align: center;
}
.contentMain{
    *{
        white-space: inherit;
    }
}
.previewImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .8);
    z-index: -100;
    transition: all .3s;
    opacity: 0;
}
.contetn{
    background: #F5F7F9;
    overflow: hidden;
    .contentCenter{
        background: white;
        padding: 20px;
        margin: 16px auto;
        box-sizing: border-box;
    }
}

</style>