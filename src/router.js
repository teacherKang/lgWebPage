// import Vue from "vue";
import Router from "vue-router";
import Login from "../src/components/login/Login.vue"
import Main from "../src/components/main.vue"
// Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
          
        
      ]
    },
    {
      path: "/Login",
      naem: "Login",
      component: Login
    }
  ]
})
export default router;