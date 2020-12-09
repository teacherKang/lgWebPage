<template>
  <div>
    <div @click="openApp" class="btn">打开APP</div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    mounted(){
    },
    methods:{
      openApp(){
        window.location.href='weixin://';
      },
    }
  }
</script>
<style scoped>
.btn{
  color: #ffffff;
  background: brown;
  width: 61.8%;
  height: 60px;
  border-radius: 30px;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  margin: 60px auto;
  cursor: pointer;
}

</style>