<template>
  <div class="top-box">
    <div class="logo" @click="$router.push({path:'/'})">
      <Loadings/>
    </div>
    <div class="nav">
      <div class="nav-item">
        <div class="iconfont iconshouye"></div>
        <div class="text">首页</div>
      </div>
      <div class="nav-item">
        <div class="iconfont iconshouye"></div>
        <div class="text">首页</div>
      </div>
      <div class="nav-item">
        <div class="iconfont iconshouye"></div>
        <div class="text">首页</div>
      </div>
      <div class="nav-item">
        <div class="iconfont iconshouye"></div>
        <div class="text">首页</div>
      </div>
      <div class="nav-item">
        <div class="iconfont iconshouye"></div>
        <div class="text">首页</div>
      </div>
    </div>
    <div class="editer" @click="gotoediter"> 
      编辑
    </div>
  </div>
</template>
<script>
  import Loadings from "./Loading"
  export default{
    components:{ Loadings },  
    data(){
      return{

      }
    },
    methods:{
      gotoediter(){
        this.$router.push({path:"/Editer"})
      }
    }
    
  }
</script>
<style lang="scss" scoped>

.top-box{
  text-align: center;
  .logo{
    width: 360px;
    height: 60px;
    background: brown;
    margin: auto;
    cursor: pointer;
  }
  .nav{
    display: flex;
    flex-flow: nowrap;
    justify-content:center;
    .nav-item{
      margin: 20px 15px 0;
      padding-bottom: 10px;
      cursor: pointer;
      &:hover{
        border-bottom: 1px solid brown;
      }
    }
  }
  .editer{
    position: fixed;
    width: 70px;
    height: 70px;
    transform: rotateZ(45deg);
    background: #000;
    top: -35px;
    right: -35px;
    color: #fff;
    text-align: center;
    line-height: 110px;
    font-size:12px;
    cursor: pointer;
    z-index: 9999;
  }
}
</style>