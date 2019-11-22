/* eslint-disable */
<template>
<div>
  <nav-header></nav-header>

  <div>
    <b-card
    overlay
    img-src= imgUrl
    img-alt="Card Image"
    text-variant="white"
    title="面对疾风把"
    sub-title="hasake"
  >
  <b-container class="bv-example-row">
  <b-row>
    <b-col></b-col>
    <b-col>
<user-form></user-form>
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
import NavHeader from '@/commponents/NavHeader'
import NavFooter from '@/commponents/NavFooter'
import UserForm from '@/commponents/UserForm'
import imgUrl from '@/assets/111.jpg'
export default {
    name: 'Home',
    data(){
        return {
            imgUrl
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