<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#" variant="primary">
      <img src="@/assets/logo.png" class="d-inline-block align-top" alt="Kitten">
      MAGE
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><b-button variant="outline-info">首页</b-button></b-nav-item>
        <b-nav-item href="#"><b-button variant="outline-info">发现</b-button></b-nav-item>
        <b-nav-item href="#"><b-button variant="outline-info">机器人</b-button></b-nav-item>
        <b-nav-item href="#"><b-button variant="outline-info">随便看看</b-button></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-navbar-nav >
           <b-nav-item href="/user/register" class="bnvitem" >注册</b-nav-item>
           <b-nav-item href="#"  >|</b-nav-item>
           <b-nav-item href="/user/register" class="bnvitem" >登录</b-nav-item>


        </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavHeader'
  
}
</script>
