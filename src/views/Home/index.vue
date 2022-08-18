<template>
   <!-- 头部组件 -->
    <AppHeader/>
    <!-- 频道组件 -->
    <HomeChannel/>
    <!-- 轮播组件 -->
    <HomeSwipe/>
    <!-- 视频 -->
    <HomeVideoList/>
</template>
<script setup lang="ts">
import AppHeader from '@/components/app-header.vue'
import HomeChannel from '@/views/Home/components/home-channel.vue'
import HomeSwipe from '@/views/Home/components/home-swipe.vue'
import HomeVideoList from '@/views/Home/components/home-video-list.vue'
</script>