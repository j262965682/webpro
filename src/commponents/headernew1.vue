

<template>
<div class="header">
        <div class="header-cont">
            <div class="logo"><img src="https://master.cryptoquanter.com/img/pc-download/logo-ca9d20a670.png" alt=""></div>
            <div class="header-right">
                <a class="" title="火星量化大师白皮书V1.0" href="https://master.cryptoquanter.com/static/whitepaper.pdf">白皮书</a>
                <a class="" href="https://www.huoxing24.com/userCenter/86b8a58304754b5eb64348fffd68d08d">公告中心</a>
                <a class="contact">联系我们</a>
            </div>
        </div>
</div>
</template>

<style scoped>

.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 10;
    background: url(https://master.cryptoquanter.com/img/pc-download/pc-head-bg-0150f8fd0a.jpg) center no-repeat;
}
.header-cont {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}
.logo {
    width: 153px;
    height: 33px;
    padding-top: 16px;
    float: left;
}
.header-right {
    float: right;
}
</style>

<script>
  export default {
    data() {
      return {
        msg: 'hello'
      };
    }
  }
</script>