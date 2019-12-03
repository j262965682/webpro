/* eslint-disable */
<template>
<div>
  <nav-header></nav-header>

  <div>
    <b-card
    overlay
    :img-src= img
    img-alt="Card Image"
    text-variant="white"
    title="面对疾风把"
    sub-title="hasake"
  >
  <b-container class="bv-example-row">
  <b-row>
    <b-col></b-col>
    <b-col style="margin-top: 150px;">
<user-form @login='loginon'></user-form>
    </b-col>
    <b-col></b-col>
  </b-row>
</b-container>
  
  </b-card>
</div>

  <nav-footer></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/views/user/login/components/NavHeader'
import NavFooter from '@/views/user/login/components/NavFooter'
import UserForm from '@/views/user/login/components/UserForm'
import img from '@/assets/back.jpg'

export default {
    name: 'login',
    data(){
        return {
            img,
            msg,
        }
    },

    components:{
        NavHeader,
        NavFooter,
        UserForm,
    },
    methods: {
      loginon(data){
        axios.post("http://localhost:8011/api/user/login",{
          email: data.form.email,
          password: data.form.password
        }).then(res=>{
          this.msg = res.data.code
        }).catch(function (error){
          console.log("error init."+error)
        })
      }
    }
}
</script>

<style>

</style>