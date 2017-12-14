<template>
  <div class="main">
    <div class="banner">
      <img src="../assets/images/banner.png">
    </div>
    <div class="center">
      <img class="logo" src="../assets/images/congratulations.png">
      <div class="howLook">如何查看?</div>
      <img class="phone" src="../assets/images/center.png">
    </div>
    <div class="suspension">
      <img src="../assets/images/WXshare.png">
    </div>
    <div class="disclaimer">
      免责声明：新浪理财师平台仅提供服务对接功能，所有理财师提供的咨询建议，仅供参考；用户需独立做出投资决策，风险自担。
      <br>投资有风险，入市需谨慎！
    </div>
  </div>
</template>
<style scoped>
  .main {
    min-width: 1200px;
    min-height: 800px;
    width: 100%;
    height: 100%;
    background-color: #3a0a79;
  }

  .main .disclaimer {
    text-align: center;
    color: #938ea3;
    font-size: 13px;
    margin: -77px 0 10px;
    position: relative;
  }

  .main .banner {
    width: 100%;
    position: relative;
  }

  .main .banner img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .center {
    position: relative;
    width: 100%;
    background-color: #3a0a79;
    padding-bottom: 10%;
    display: flex;
    flex-direction: column;
  }

  .center .howLook {
    text-align: center;
    margin: 0 auto 30px auto;
    color: #e6e5eb;
    border: 1px solid #e6e5eb;
    display: block;
    width: 125px;
    padding: 5px;
    font-size: 20px;
    border-radius: 26px;
  }

  .center .logo {
    width: 25%;
    margin: 0 auto;
    padding: 2% 0;
  }

  .center .phone {
    width: 58%;
    height: 100%;
    position: relative;
    left: 21%;
  }

  .suspension {
    height: 267px;
    width: 241px;
    background-image: url("../assets/images/suspension.png");
    position: fixed;
    right: 0;
    top: 36%;
  }

  .suspension img {
    height: 130px;
    width: 130px;
    position: relative;
    top: 95px;
    left: 44px;
  }
</style>
<script>
  export default {
    name: 'share',
    data: () => ({}),
    mounted(){
      document.title = "恭喜您，抢到啦!";
    }
  }
</script>
