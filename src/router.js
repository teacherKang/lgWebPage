import Vue from "vue";
import Router from "vue-router";
import Login from "../src/components/login/Login.vue"
import Register from "../src/components/login/Register.vue"
import Main from "../src/components/main.vue"
import ChildTset from "../src/components/ChildTset.vue"
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
        }
        
      ]
    },

    
    
  ]
})
export default router;