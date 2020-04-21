import Vue from 'vue'

import "ant-design-vue/dist/antd.css";
// import Button from "ant-design-vue/lib/button";
// import antd from '../node_modules/ant-design-vue';
import ant from '../node_modules/ant-design-vue';
import App from './App.vue'
// console.log(antd)
Vue.use(ant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
