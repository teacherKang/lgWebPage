<template>
  <div id="login-box">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          Remember me
        </a-checkbox>
        <a class="login-form-forgot" @click="$router.push({ name: 'Register' })">
          register now!
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          Log in
        </a-button>
        <!-- Or
        <a href="">
          register now!
        </a> -->
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
  export default{
    data () {
      return{
      }
    },
     beforeCreate() {
      this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    created () {
      
    },
    mounted () {

    },
    methods:{
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          console.log(err)
          if (!err) {
            console.log('Received values of form: ', values);
            this.$router.push({ name: 'main' });
          }
        });
      },
    },
  }
</script>
<style scoped>
  #login-box{
    width: 100vw;
    height: 100vh;
    padding-top:30vh ;
  }
  #components-form-demo-normal-login {
    max-width: 300px;
    margin:0 auto;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>