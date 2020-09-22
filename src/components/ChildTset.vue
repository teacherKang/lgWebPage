<template>
  <div>
    <div>
      <a-button @click="add">添加</a-button>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {

    }
  },
  methods:{
    add () {
      this.axios.get('/api/getData',{},{"headers":{}}).then(res=>{
        console.log(res);
      })
    }
  }

}

</script>