<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from './store'
  import Util from './util'
  import * as CONFIG from './config/index'
  export default {
    name: 'app',
    created(){
      let ActivityId = Util.getQueryStr("activityId") ? Util.getQueryStr("activityId") : '1',
          BrokerCode = Util.getQueryStr("brokerCode") ? Util.getQueryStr("brokerCode") : '607050';

      if (ActivityId) {
        store.dispatch("setCommonInfo", {
          ActivityId: ActivityId,
          BrokerCode: BrokerCode
        })
      } else {
        console.error("缺少参数")
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: none;
  }

  .app {
    width: 100%;
    height: 100%;
    /*display: block;*/
  }

  /** 清除内外边距 **/
  html, body {
    font-family: 'PingFangSC-Light', 'Heiti SC', 'Helvetica', 'HelveticaNeue', 'Droidsansfallback', 'Droid Sans';
    width: 100%;
    height: 100%;
    background-color: #390976;

  }

  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  form, fieldset, legend, button, input, textarea, /* form elements 表单元素 */
  th, td /* table elements 表格元素 */
  i, span {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    font-family: PingFangSC-Light, sans-serif;
    font-size: .24rem;
  }

  i, b, em {
    font-style: normal;
  }

  input, button {
    border: none;
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
  }

  button {
    color: inherit;
    text-align: inherit;
    font: inherit;
  }

  textarea {
    outline: none;
    resize: none;
  }

  [v-cloak] {
    display: none;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    /*color: rgba(255, 255, 255, .7);*/
    color: #808080
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    /*color: rgba(255, 255, 255, .7);*/
    color: #808080
  }

  input:-ms-input-placeholder {
    /*color: rgba(255, 255, 255, .7);*/
    color: #808080
  }

  input::-webkit-input-placeholder {
    /*color: rgba(255, 255, 255, .7);*/
    color: #808080
  }
</style>
