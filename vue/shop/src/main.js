import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

// 按需引入vant
import {Toast, NavBar,Swipe, SwipeItem, Icon, Tabbar, TabbarItem, Lazyload, Button, Tab, Tabs, Field, CellGroup} from 'vant';

Vue.use(Toast).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Swipe).use(SwipeItem).use(Button).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Lazyload);
// import Vant from 'vant';
// import 'vant/lib/index.css';
// vant 的完全引入
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
