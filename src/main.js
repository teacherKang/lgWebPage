import Vue from 'vue'
import router from "./router.js"
import "ant-design-vue/dist/antd.less"
import "./assets/css/base.css";
import ant from '../node_modules/ant-design-vue';
import App from './App.vue'
import axios from 'axios'
Vue.use(ant);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
