import Request from './request'
import compressImg from './compressImg'
import localstorage from './localStorage'

class Utils {
  constructor() {}

  //http请求
  request(actionType, url, options, opts) {
    switch (actionType) {
      case "get":
        return Request.get(url, options, opts)
        break;
      case "post":
        return Request.post(url, options, opts)
        break;
      case "jsonp":
        return Request.jsonp(url, options, opts)
        break;
    }
  }

  //图片压缩
  // compressPic(img){
  // 	compressImg(img)
  // }

  //本地存储
  localStorage(actionType, {key, value}){
    switch (actionType) {
      case "set":
        return localstorage.setStorage(key, value)
        break;
      case "get":
        return localstorage.getStorage(key)
        break;
      case "del":
        return localstorage.delStorage(key)
        break;
      case "clear":
        return localstorage.clearAllStorage()
        break;
    }
  }

  /* 判断Object是否为空 */
  isEmptyObject(items) {
    if (JSON.stringify(items) == "{}") {
      return true;
    }
  }

  //获取url参数
  getQueryStr(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  /* 格式化接口URI */
  urlFormat(key, obj) {
    let URI = key;
    if (typeof obj === 'object' && !this.isEmptyObject(obj) && key.match(/\{\{(.|\r\n)+\}\}/)) {
      for (let k in obj) {
        URI = URI.replace('{{' + k + '}}', obj[k]);
      }
    }
    return URI;
  }
  /* 格式化保留2位小数 */
  toDecimal(x){
    let f = parseFloat(x);
    if (isNaN(f)) {
      return;
    }
    f = Math.round(x * 100) / 100;
    return f;
  }

  /* 格式化时间 */
  dateFormat(val, format) {
    let REGEX = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
    if(val){
      let date = new Date(val);
      date.setHours(date.getHours() + 8);
      const [whole, yy, MM, dd, hh, mm, ss] = date.toISOString().match(REGEX);
      const year = new Date().getFullYear(),
        month = new Date().getMonth() + 1,
        dates = new Date().getDate();
      if(format){
        return format
          .replace('yyyy', yy)
          .replace('yy', yy.slice(2))
          .replace('MM', MM)
          .replace('dd', dd)
          .replace('hh', hh)
          .replace('mm', mm)
          .replace('ss', ss)
      } else {
        return [yy, MM, dd].join('-') + ' ' + [hh, mm, ss].join(':');
      }
    } else {
      return '--'
    }
    //let date = new Date(val);
    //if (!date.getTime()) return '--';
    //date.setHours(date.getHours() + 8);
    //const [whole, yy, MM, dd, hh, mm, ss] = date.toISOString().match(REGEX);
    //return format
    //	.replace('yyyy', yy)
    //	.replace('yy', yy.slice(2))
    //	.replace('MM', MM)
    //	.replace('dd', dd)
    //	.replace('hh', hh)
    //	.replace('mm', mm)
    //	.replace('ss', ss)
  }
  paramFilter(obj) {
    let result = {}, key;
    for(key in obj) {
      let col = obj[key];
      if(key!='offset'){
        if(col && col !=-1){
          result[key] = col;
        }
      }else if(key=='offset'){
        result[key] = col;
      }
    }
    return result;
  }

  stockCodeFormat(val){
    var reg = /^\d{6}\b/;
    if(reg.test(val)){
      return val;
    } else {
      return ''
    }
  }
}

export default new Utils()
