import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'

//引入vant,按需引入
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';
//引入mock
import '@/mock/index'
createApp(App)
.use(router)
//注册全局vant组件
.use(Tab)
.use(Tabs)
.use(Swipe)
.use(SwipeItem)
.mount('#app')
