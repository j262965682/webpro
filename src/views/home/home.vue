/* eslint-disable */
<template>
<div>
  <nav-header></nav-header>
  
  <nav-footer></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/commponents/NavHeader.vue'
import NavFooter from '@/commponents/NavFooter'

export default {
    name: 'Home',
    data(){
        return {
            msg:'hello vue'
        }
    },
    components:{
        NavHeader,
        NavFooter
    }

}
</script>

<style>

</style>