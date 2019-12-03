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
    name: 'register',
    data(){
        return {
            img
        }
    },
    components:{
        NavHeader,
        NavFooter,
        UserForm,
    }

}
</script>

<style>

</style>