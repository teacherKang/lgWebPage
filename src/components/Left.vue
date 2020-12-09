<template>
  <div class="left-box">
    <div class="head-img" @click="$router.push({path:'/'})">
      <!-- <img src="http://qh6yydmd3.hb-bkt.clouddn.com/timg.jpg" alt=""> -->
    </div>
    <div class="user-name">康师傅不会煮面</div>
    <div class="descript">这个人很烂，什么也没留下！</div>
    <!-- <div class="iconfont iconweibo"></div> -->
    <div class="category">
      <div class="item">
        <div>3</div>
        <div>日志</div>
      </div>
      <div class="item">
        <div>4</div>
        <div>分类</div>
      </div>
      <div class="item">
        <div>5</div>
        <div>标签</div>
      </div>
    </div>
    <div class="link-box">
      <div>
        <span class="iconfont iconlianjie"></span>
        <span>推荐阅读</span>
      </div>
      <div class="link-content">
        <div class="link-item">
          <span class="iconfont iconweibo"></span>
          <span>weibo</span>
        </div>
        <div class="link-item">
          <span class="iconfont icongithub"></span>
          <span>github</span>
        </div>
      </div>
    </div>
    <div class="link-box">
      <div>
        <span class="iconfont iconlianjie"></span>
        <span>链接</span>
      </div>
      <div class="link-content">
        <div class="link-item" v-for="(item,index) in linkList" :key="index" @click="$router.push({path:item.path})">
          <span class="iconfont iconweibo"></span>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        linkList:[
          {name:'canvas',path:"/Canvas"},
          {name:'OpenApp',path:"/OpenApp"},
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  div{
    
    font-size: 16px;
    &.left-box{
      width: 100%;
      height: 100%;
      background: #222;
      padding: 18px 10px;
      text-align: center;
    }
    .head-img{
      width: 96px;
      height: 96px;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      background: url("http://qiniu.zdmlg.com/timg.jpg") no-repeat center;
      background-size: cover;
      cursor: pointer;
      //  contain
      transition:all 0.2s ease-in-out;
      
    }
    .head-img:hover{
      width: 120px;
      height: 120px;
      
    }
    .user-name{
      margin: 5px 0;
      line-height: 30px;
      color: LightSalmon;
    }
    .descript{
      font-size: 14px;
      color: #999;
    }
    .category{
      display: flex;
      flex-flow: nowrap;
      justify-content: center;
      
      .item{
        margin: 10px 0px 0;
        padding: 0 7px;
        cursor: pointer;
        color: #999;
        border-right: 2px solid rgba($color: #999, $alpha: 0.2);
        &:hover{
          color: #fff;
        }
        &:last-child{
          border-right: none;
        }
      }
    }
    .link-box{
      margin-top: 30px;
      color: #999;
      .iconfont{
        display: inline-block;
        margin-right: 5px;
        font-size: 18px;
        position: relative;
        top: 2px;
      }
      span{
        font-size: 12px;
        line-height: 15px;
      }
      .link-content{
        display: flex;
        flex-wrap:wrap;
        justify-content:center;
        margin-top: 5px;
        .link-item{
          border-bottom: 1px solid #999;
          margin:0 10px;
          padding: 3px 0;
          &:hover{
            color: #fff;
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
  }

</style>