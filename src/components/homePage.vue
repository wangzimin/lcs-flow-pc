<template>
  <div class="main">
    <div class="banner">
      <img src="../assets/images/banner.png" alt="">
    </div>
    <div class="introduce">
      <h2>
        <img src="../assets/images/activityLeft.png">
        免费领取每日三支股
        <img src="../assets/images/activityRight.png">
      </h2>
      <p>来自券商的数千位专业老师，平台随机筛选10位，为大家创建福利股票池！每位专业的老师将在所属股票池中呈现当前看好的三支股，作为股民福利专享。</p>
    </div>
    <div class="suspension">
      <img src="../assets/images/WXshare.png" alt="">
    </div>
    <div class="validation">
      <div class="validation-top">
        <input type="text" id="phoneBox" placeholder="请输入您的手机号" v-model="userPhone">
        <p v-show="errorPhone">{{errorPhone}}</p>
      </div>
      <div class="validation-center">
        <div class="validation-center-code">
          <input type="text" id="codeBox" placeholder="请输入验证码" v-model="userCode">
          <button v-if="!sendMsgDisabled" @click="jump" :disabled="disabled">获取验证码</button>
          <button v-if="sendMsgDisabled" style="background-color:#808080">{{count + 's'}}</button>
        </div>
        <p v-show="errorCode">{{errorCode}}</p>
      </div>
      <div class="validation-bottom">
        <button @click="login" ref="receive">
          立即领取<img src="../assets/images/return.png">
        </button>
      </div>
    </div>
    <div class="disclaimer">
      免责声明：新浪理财师平台仅提供服务对接功能，所有理财师提供的咨询建议，仅供参考；用户需独立做出投资决策，风险自担。
      <br>投资有风险，入市需谨慎！
    </div>
    <div class="cover" v-show="cover">
      <div class="imgNumber" v-show="bounced" ref="imgNumber">
        <div class="wrap">
          <span class="imgTop">图片验证码</span>
          <span class="closeImg" @click="closeImgFun">X</span>
        </div>
        <div class="imgCenter">
          <div>
            <input type="text" id="imageBox" v-model="userMsg">
            <img class="imgChange" :src="imgUrl" @click="imgChange"/>
          </div>
          <p v-show="errorMsg">{{errorMsg}}</p>
        </div>
        <button @click="send">确定</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .main {
    height: 100%;
    width: 100%;
    min-width: 1200px;
    background-color: #390976;
  }

  .main .banner {
    width: 100%;
    position: relative;
    background-size: 100% 100%;
  }

  .main .banner img {
    height: 100%;
    width: 100%;
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

  .introduce {
    width: 50%;
    height: 200px;
    margin: 0 auto;
  }

  .introduce h2 {
    font-size: 30px;
    color: #ffffff;
    margin: auto;
    text-align: center;
  }

  .introduce p {
    font-size: 20px;
    color: #ffffff;
    margin: auto;
    line-height: 40px;
  }

  .main .validation {
    height: 355px;
    width: 610px;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-image: url("../assets/images/shade.png");
    margin-bottom: 90px;
  }

  .main .validation .validation-top {
    margin-top: 55px;
    height: 118px;
  }

  .main .validation .validation-top input {
    display: block;
    width: 475px;
    height: 70px;
    line-height: 40px;
    margin: 0 auto;
    outline: none;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 25px;
    color: #000;
    background-color: #ffffff;
    border-radius: 50px;
  }

  .main .validation .validation-top p {
    height: 20px;
    font-size: 16px;
    color: #ffffff;
    margin: 0 100px;
  }

  .main .validation .validation-center {
    height: 118px;
  }

  .main .validation .validation-center .validation-center-code {
    height: 70px;
    display: flex;
    flex-direction: row;
    margin: 0 68px;
  }

  .main .validation .validation-center .validation-center-code input {
    display: block;
    width: 320px;
    height: 70px;
    line-height: 40px;
    outline: none;
    padding: 0 30px;
    box-sizing: border-box;
    font-size: 25px;
    color: #000;
    background-color: #ffffff;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  .main .validation .validation-center .validation-center-code button {
    display: block;
    width: 155px;
    height: 70px;
    line-height: 40px;
    outline: none;
    padding: 10px;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #ef702b;
    cursor: pointer;
  }

  .main .validation .validation-center .validation-center-code button span {
    font-size: 25px;
    color: #ffffff;
  }

  .main .validation .validation-center p {
    height: 20px;
    font-size: 16px;
    color: #ffffff;
    margin: 0 100px;
  }

  .main .validation .validation-bottom {
    height: 118px;
  }

  .main .validation .validation-bottom button {
    width: 360px;
    height: 70px;
    line-height: 60px;
    border: none;
    background-color: #ffe157;
    color: #bd4517;
    font-size: 25px;
    text-align: center;
    border-radius: 50px;
    margin: 0 125px;
    cursor: pointer;
  }

  .main .validation .validation-bottom button img {
    margin: 0 15px;

  }

  .main .disclaimer {
    text-align: center;
    color: #938ea3;
    margin: -70px 0 10px;
    font-size: 13px;
  }

  .main .cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 98;
  }

  .main .cover .imgNumber {
    height: 265px;
    width: 420px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 99;
  }

  .main .imgNumber .wrap {
    text-align: center;
  }

  .main .imgNumber .wrap .imgTop {
    height: 77px;
    font-size: 25px;
    text-align: center;
    padding: 20px 0 30px 0;
    display: block;
  }

  .main .imgNumber .wrap .closeImg {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 22px;
    padding: 22px;
    cursor: pointer;
    display: block;
  }

  .main .imgNumber .imgCenter {
    height: 107px;
    font-size: 25px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
  }

  .main .imgNumber .imgCenter div {
    display: flex;
    flex-direction: row;
  }

  .main .imgNumber .imgCenter div input {
    height: 68px;
    width: 190px;
    margin-right: 10px;
    font-size: 25px;
    padding: 0 10px;
    border: solid 1px #c0c0c0;
    border-radius: 5px;
  }

  .main .imgNumber .imgCenter div img {
    height: 68px;
    width: 120px;
    background-color: #e99ade;
    cursor: pointer;
  }

  .main .imgNumber .imgCenter p {
    height: 30px;
    font-size: 20px;
  }

  .main .imgNumber button {
    width: 335px;
    height: 60px;
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    background-color: #ff484a;
    border-radius: 50px;
    margin: 0 42px;
    cursor: pointer;
  }
</style>

<script>
  import {mapGetters} from 'vuex'
  import store from '@/store'
  import Utils from '@/util'
  import router from '@/router'
  const tooOftenImg = require("../../static/tooOftenImg.png")
  export default {
    name: 'Index',
    data: () => ({
      bounced: false,
      cover: false,
      errorPhone: false,
      errorMsg: false,
      errorCode: false,
      notClick: false,
      userPhone: '',
      userMsg: '',
      userCode: '',
      CrmActivity: {},
      token: '',
      tdToken: '',
      smsToken: '',
      imgUrl: '',
      count: '',
      sendMsgDisabled: false,
      disabled: false
    }),
    computed: {
      ...mapGetters(['inited', 'commonInfo', 'CrmActivityId', 'ImgToken', 'SendCode', 'sendData'])
    },
    filters: {
      timeFormat: Utils.dateFormat
    },
    mounted () {
      document.title = "理财师的三支股"
      if (!this.inited) {
        this.getActivityId()
        this.getImgToken()
      }
    },
    watch: {
      CrmActivityId: {
        deep: true,
        handler(v, ov){
          this.CrmActivity = v
        }
      },
      ImgToken: {
        deep: true,
        handler(v, ov){
          if (v) {
            this.token = v
            let url = "";
            if (process.env.NODE_ENV != 'production') {
              url = 'https://test-sms.yinrui99.com/api/1/pc/captcha?activityId=';
            } else {
              url = 'https://sms.yinrui99.com/api/1/pc/captcha?activityId=';
            }
            this.imgUrl = url + this.CrmActivity.crmActivityId +
              "&reffer=" + this.CrmActivity.reffer + "&width=150&height=80&token=" + this.token;
          } else {
            this.errorMsg = '图形验证码获取过于频繁'
            this.imgUrl = tooOftenImg
          }
        }
      },
      SendCode: {
        deep: true,
        handler(v, ov){
          if (v) {
            if (v.code == 1) {
              this.smsToken = v.token
              this.bounced = false
              this.cover = false,
                //'获取验证码变成60s 倒计时'
                this.countDown()
            } else if (v.code == -1) {
              if (this.ImgToken == undefined && this.userMsg !== '') {
                this.errorMsg = '图形验证过于频繁'
              } else {
                this.errorMsg = '请输入图片验证码'
              }
            } else if (v.code == -2) {
              this.errorMsg = v.reason
            } else if (v.code == -9) {
              this.errorMsg = v.reason
            } else {
              this.errorMsg = v.reason
              this.getImgToken()
            }
          }
        }
      },
      sendData: {
        deep: true,
        handler(v, ov){
          if (v && v !== '') {
            if (v.code == 1) {
              this.$router.push('/noReceive')
            } else if (v.code == -3) {
              this.$router.push('/receive')
            } else if (v.code == -2) {
              this.errorCode = '短信验证码错误'
            } else {
              this.errorCode = v.msg
            }
          } else {
            this.errorCode = ''
          }
        }
      },
      userCode: {
        deep: true,
        handler(v, ov){
          this.errorCode = ''
          let phoneReg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if (v && v !== '') {
            if (this.userPhone == '') {
              this.errorPhone = "请先输入手机号并获取验证码";
            } else if (!phoneReg.test(this.userPhone)) {
              this.errorPhone = "手机格式不正确";
            } else {
              this.$refs.receive.style.backgroundColor = '#e6a13d'
            }
          } else {
            this.errorPhone = "";
            this.$refs.receive.style.backgroundColor = '#ffe157'
          }
        }
      },
      userPhone: {
        deep: true,
        handler(v, ov){
          if (v !== '') {
            this.errorPhone = "";
            let phoneReg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if (!phoneReg.test(this.userPhone)) {
              this.errorPhone = "手机格式不正确";
              this.$refs.receive.style.backgroundColor = '#ffe157'
            } else {
              this.errorPhone = "";
              if (this.userCode !== '') {
                this.$refs.receive.style.backgroundColor = '#e6a13d'
              } else {
                this.$refs.receive.style.backgroundColor = '#ffe157'
              }
            }
          } else {
            if (this.userCode == '') {
              this.errorPhone = ""
            } else {
              this.errorPhone = "请先输入手机号并获取验证码";
            }
          }
        }
      },
      userMsg: {
        deep: true,
        handler(v, ov){
          this.errorMsg = ''
        }
      }
    },
    methods: {
      getActivityId()
      { //根据 URL 获取 crmId
        let params = {
          activityId: this.commonInfo.ActivityId
        }
        store.dispatch("getCrmActivityId", params).then((data) => {
        })
      }
      ,
      getImgToken()
      { //获取图片验证码所需要的 token 拼接图片 URL
        let params = {
          activityId: this.CrmActivity.crmActivityId,
          reffer: this.CrmActivity.reffer
        }
        store.dispatch("getImgToken", params).then((data) => {
        })
      }
      ,
      getSmsCode()
      { //发送短信验证码
        let params = {
          phone: this.userPhone,
          imgcaptcha: this.userMsg,
          activityId: this.CrmActivity.crmActivityId,
          reffer: this.CrmActivity.reffer,
          signature: 'xlcdyzm',
          token: this.token,
          tdToken: this.tdToken
        }
        store.dispatch("getSmsCode", params).then((data) => {
        })
      }
      ,
      closeImgFun()
      {
        this.userMsg = ''
        this.cover = false
      }
      ,
      sendDate()
      { //跳转页面
        let params = {
          phone: this.userPhone,
          captcha: this.userCode,
          activityId: this.commonInfo.ActivityId,
          brokerCode: this.commonInfo.BrokerCode,
          reffer: this.CrmActivity.reffer,
          crmActivityId: this.CrmActivity.crmActivityId,
          token: this.smsToken
        }
        store.dispatch("sendDate", params).then((data) => {
          console.log(params)
        })
      }
      ,
      jump()
      { //跳出弹窗输入图片验证码
        let phoneReg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (this.userPhone == '') {
          this.errorPhone = "请输入手机号码";
        } else if (!phoneReg.test(this.userPhone)) {
          this.errorPhone = "手机格式不正确";
        } else {
          this.errorPhone = "";
          this.bounced = true;
          this.cover = true;
          this.getTokenId() //获取图形验证码所需tdtoken

          let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;//浏览器宽
          let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//浏览器高
          this.$refs.imgNumber.style.left = (  w - 420 ) / 2 + 'px';
          this.$refs.imgNumber.style.top = (h - 280 ) / 2 + 'px';

          this.getImgToken()
        }
      }
      ,
      imgChange()
      { //刷新图片验证码
        this.getImgToken()
      }
      ,
      send()
      { //确定发送短信验证码
        this.getSmsCode()
      }
      ,
      login()
      { //立即领取跳转页面
        let phoneReg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (this.userPhone == '') {
          this.errorPhone = "请输入手机号码";
        } else if (!phoneReg.test(this.userPhone)) {
          this.errorPhone = "手机格式不正确";
        } else {
          if (this.userCode == '') {
            this.errorCode = '请输入短信验证码'
          } else {
            this.sendDate()
          }
        }
      }
      ,
      getTokenId()
      { //获取同盾ID
        this.tdToken = 'yintianxia-' + new Date().getTime() + '-' + Math.random().toString(16).substring(2);
        let host = 'fp', host1 = 'static';
        if (/test/.test(location.hostname)) {
          host = 'fptest';
          host1 = 'statictest';
        }
        window._fmOpt = {
          partner: 'yintianxia',
          appName: 'yintianxia_h5_web',
          token: this.tdToken
        };
        let cimg = new Image(1, 1);
        cimg.onload = function () {
          _fmOpt.imgLoaded = true;
        };
        cimg.src = 'https://' + host + '.fraudmetrix.cn/fp/clear.png?partnerCode=yintianxia&appName=yintianxia_h5_web&tokenId=' + window.tokenId;
        let fm = document.createElement('script');
        fm.type = 'text/javascript';
        fm.async = true;
        fm.src = 'https://' + host1 + '.fraudmetrix.cn/fm.js?ver=0.1&t=' + (new Date().getTime() / 3600000).toFixed(0);
        let s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(fm, s);
      }
      ,
      countDown()
      { //60秒 倒计时
        if (!this.timer) {
          this.count = 60;
          this.sendMsgDisabled = true
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= 60) {
              this.count--;
            } else {
              this.sendMsgDisabled = false;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
    }
  }
</script>
