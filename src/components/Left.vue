<template>
  <div class="left-box">
    <div class="head-img">
      <img src="../assets/image/timg.jpg" alt="">
    </div>
    <div class="user-name">康师傅不会煮面</div>
    <div class="descript">这个人很烂，什么也没留下！</div>
    <!-- <div class="iconfont iconweibo"></div> -->
    <div >

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  div{
    // color: LightSalmon;
    color: #fff;
    font-size: 16px;
    &.left-box{
      width: 100%;
      height: 100%;
      background: brown;
      padding: 18px 10px;
      text-align: center;
    }
    .head-img{
      width: 96px;
      height: 96px;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .user-name{
      margin: 5px 0;
      
      line-height: 30px;
    }
    .descript{
      font-size: 14px;
    }
  }

</style>