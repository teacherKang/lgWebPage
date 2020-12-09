import Vue from "vue";
import Router from "vue-router";
import Login from "../src/components/login/Login.vue"
import Register from "../src/components/login/Register.vue"
import Main from "../src/components/main.vue"
import ChildTset from "../src/components/ChildTset.vue"
import ArticleList from "../src/view/article/ArticleList.vue"
import Editer from "../src/view/editer/Editer.vue"
import Canvas from "../src/view/canvas.vue"
import OpenApp from "../src/view/OpenApp.vue"
import PricePage from "../src/view/price/index"
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/Login",
      name: "login",
      component: Login
    },
    {
      path: "/Register",
      name: "Register",
      component: Register
    },
    
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          path: "/ChildTset",
          name: "ChildTset",
          component:ChildTset,
        },
        {
          path: "/ArticleList",
          name: "ArticleList",
          component:ArticleList,
        },
        {
          path: "/Editer",
          name: "Editer",
          component:Editer,
        },
        {
          path: "/Canvas",
          name: "Canvas",
          component:Canvas,
        },
        {
          path: "/OpenApp",
          name: "OpenApp",
          component:OpenApp,
        },
      ]
    },
    //价格页面
    {
      path: "/price",
      name: "price",
      component: PricePage
    },
    
    
    
  ]
})
export default router;