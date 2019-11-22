/* eslint-disable */
<template>
<div>
  <nav-header></nav-header>
  <div>
      这是商品列表页面
      <span>{{$route.params.goodsId}}</span><br>
      <span>{{$route.params.userId}}</span><br>
      <router-link to="/goods/title">show title</router-link>
      <router-link to="/goods/img">show image</router-link>
      <div>
        <router-view></router-view>
      </div>
      <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车</router-link>
      <button @click="jump">button-跳转到购物车</button>
  </div>
</div>
</template>

<script>
import NavHeader from '@/commponents/header.vue'

export default {
    data(){
        return {
            msg:'hello vue'
        }
    },
    components:{
        NavHeader
    }

}
</script>

<style>

</style>