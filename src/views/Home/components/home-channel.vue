<template>
  <van-tabs v-model:active="active">
  <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  
</van-tabs>

</template>

<script setup  lang="ts">
import { ref } from 'vue';
import axios from 'axios'
    const active = ref(0);
    //频道数据，<INavItem[]>表示list数据为数组，数组的每一项需要符合INavItem
    //好处：模板中使用list和item的时候，鼠标移入有类型提醒。
    const list = ref<INavItem[]>([])//泛型，数组的每一项都必须符合INavItem定义的类型
    //ts的接口用于标记数据格式
    interface INavItem{
      id:string,
      text:string
    }
    axios({
      url:'/navList',
      method:'get'
    }).then(res=>{
      list.value = res.data.result
      
    })
   
  


</script>

