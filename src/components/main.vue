<template>
  <div id="main">
    <!-- <router-view /> -->
    <div class="left" :class="{'active' : leftFlag}"> <Left/>   </div>
    <div class="top" :class="{'active' : leftFlag}"> <Top/> </div>
    <div class="main" :class="{'active' : leftFlag}">
      <router-view />
    </div>
    <div class="fix_btn" :class="{'active' : leftFlag}" @click="isShowLeft">
      <div class="top_line"></div>
      <div class="center_line"></div>
      <div class="bottom_line"></div>
    </div>
  </div>
</template>

<script>
import Left from "./Left"
import Top from "./Top"
export default {
  components:{Left,Top},
  data () {
    return{
      leftFlag:true,
    }
  },
  created () {
    // this.add()
  },
  mounted (){
    console.log(this.leftFlag)
  },
  methods:{
    add () {
      this.axios.get('/api/getData').then(res=>{
        console.log(res);
      })
    },
    pushRouter (url) {
      if(this.$route.path===url) return;
      this.$router.push({path:url})
    },
    isShowLeft(){
      this.leftFlag = !this.leftFlag;
      console.log(this.leftFlag)
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#main{
  position: relative;
  .main.active{
    width: calc(100% - 320px);
    left: 320px;
  }
  .top.active{
    width: calc(100% - 320px);
    left: 320px;
  }
  .left.active{
    left: 0;
  }
  .top{
    position: absolute;
    width: 100%;
    min-width: 850px;
    left: 0;
    text-align: center;
    // height: 300px;
    padding-top: 30px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    z-index: 98;
    background: #fff;
  }
  
  .left{
    position: fixed;
    // width: 0;
    width: 320px;
    height: 100vh;
    transition: all 0.3s ease-in-out;
    // box-shadow: inset 0 2px 6px OrangeRed;
    top: 0;
    left: -320px;
    z-index: 999;
  }
  .main{
    position: absolute;
    width: 100%;
    min-width: 850px;
    // min-height: calc(100% - 165px);
    transition: all 0.3s ease-in-out;
    left: 0;
    top: 165px;
    z-index: 99;
    background: #fff;
  }
  .fix_btn.active{
    .center_line{
      display: none;
    }
    .top_line{
      top: 6px;
      transform: rotate(-45deg);
      width: 100% !important;
    }
    .bottom_line{
      top: 0px;
      transform: rotate(45deg);
      width: 100% !important;
    }
    &:hover{
      .top_line{
        top: 6px;
        left: 0;
        transform: rotate(-45deg);
        width: 100%;
      }
      .bottom_line{
        left: 0;
        transform: rotate(45deg);
        width: 100%;
      }
    }
    
  }
  .fix_btn{
    background: brown;
    width: 24px;
    height: 24px;
    position: fixed;
    left: 30px;
    bottom: 45px;
    padding: 5px;
    z-index: 999;
    cursor: pointer;
    div{
      width: 100%;
      position: relative;
      height: 2px;
      background: #fff;
      margin-top: 4px;
      left: 0;
      transition: all .3s linear;
      &:first-child{
        margin-top: 0;
      }

    }
    &:hover{
      .top_line{
        left: 50%;
        transform: rotate(45deg);
        top: 3px;
        width: 50%;
      }
      .bottom_line{
        left: 50%;
        transform: rotate(-45deg);
        bottom: 3px;
        width: 50%;
      }

    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
