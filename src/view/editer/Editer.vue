<template>
  <div class="editer">
    <div class="flex marginBottom15">
      <label width="80px">标题：</label>
      <a-input v-model="title" placeholder="请输入文章标题" />
    </div>
    <div class="btn">
      <a-button class="marginBottom15" type="primary" @click="submit">发布</a-button>
    </div>
    <!-- <mavonEditor
      v-model="content" 
      ref="md" 
      @change="change"
      style="min-height: 600px"
    /> -->
    <mavonEditor style="min-height: 600px"></mavonEditor>
  </div>
</template>
<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  // import mavonEditor from "../../components/editer/Markdown"
  export default{
    components:{ mavonEditor },
    data(){
      return{
        content:"",
        html:"",
        title:""
      }
    },
    computed:{
      
    },
    methods:{
      change(value, render){
        this.html = render;
        console.log(render)
      },
      submit () {
        this.axios.post('/api/addArticle',{content:this.content,html:this.html,title:this.title},{"headers":{}}).then(res=>{
        console.log(res);
      })
      }
    }
  }
</script>
<style lang="scss" scoped>
.editer{
  width: calc(100% - 60px);
  margin: auto;
  .flex{
    label{
      width: 50px;
    }
  }
  .btn{
    display: flex;
    justify-content: flex-end;
  }
}
</style>