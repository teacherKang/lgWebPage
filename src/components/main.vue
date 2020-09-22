<template>
  <div id="main">
    <!-- <router-view /> -->
    <div class="left">left</div>
    <div class="top">top</div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      collapsed: false,
      menuList:[
        {
          name: "测试",
          list:[
            {
              path: "/ChildTset",
              name:"测试1",
              list:[]
            }
          ],
          
        }
      ]
    }
  },
  created () {
    // this.add()
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
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#main{
  position: relative;
  .top{
    position: absolute;
    width: calc(100% - 320px);
    left: 320px;
    text-align: center;
    height: 300;
    padding-top: 100px;
    box-sizing: border-box;

  }
  .left{
    position: fixed;
    width: 320px;
    height: 100vh;
    background: #222;
    box-shadow: inset 0 2px 6px #000;
    top: 0;
    left: 0;
  }
  .main{
    position: absolute;
    width: calc(100% - 320px);
    height: auto;
    left: 320px;
    top: 300px;
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
