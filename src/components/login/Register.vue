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
        <a-input
          v-decorator="[
            'confirmPassword',
            { rules: [{ required: true, message: 'Please input your confirmPassword!' }] },
          ]"
          type="password"
          @blur="validatePhoneBlur"
          placeholder="确认密码"
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
        <a class="login-form-forgot" @click="$router.push({ name: 'login' })">
          login now!
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
          register in
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
    name:"Register",
    data(){
      return{
        form:this.$form.createForm(this),
      }
    },
    mounted () {
      
    },
    methods:{
      validatePhoneBlur(e) {
        console.log(e.target.value);
        console.log(this.form.getFieldValue())
        if (e.target.value && e.target.value!==this.form.getFieldValue('password')) {
          const arr = [{
            message: '您输入两次相同的密码!',
            field: 'confirmPassword',
          }]
          this.form.setFields({ confirmPassword: { value: e.target.value, errors: arr } })
        }
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
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