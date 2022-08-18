<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in list" :key="item.imgSrc">
        <img :src="item.imgSrc"/>
        </van-swipe-item>
    </van-swipe>
</template>
<script setup  lang="ts">
import {ref} from 'vue'
import axios from "axios";
const list = ref<ISwiper[]>([])//泛型，数组的每一项都必须符合ISwiper定义的类型
    //ts的接口用于标记数据格式
    interface ISwiper{
      imgSrc:string,
      link:string
    }
axios({
    url:'/swiperList',
    method:'get'
}).then(res=>{
    list.value = res.data.result
})
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
