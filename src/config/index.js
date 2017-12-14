const CONFIG = {
  development: {
    domian: {
      sms: 'http://test-sms.yinrui99.com',
      lcs: 'http://test-lcs.chaochaojin.com/lcs-activity-api'
    }
  },
  single: {
    domian: {
      sms: 'http://test-sms.yinrui99.com',
      lcs: 'http://192.168.3.136:3080/lcs-activity-api'
    }
  },
  production: {
    domian: {
      sms: 'https://sms.yinrui99.com',
      lcs: 'https://lcs-activity-api.chaochaojin.com'
    }
  }
}

const env = process.env.NODE_ENV || 'development'
const SMSDOMAIN = CONFIG[env]['domian']['sms']
const LCSDOMAIN = CONFIG[env]['domian']['lcs']

const GET_IMG_TOKEN = SMSDOMAIN + '/api/1/pc/captcha/token' //获取图片验证码token
const GET_CRM_ID = LCSDOMAIN + '/api/info/1/activity/activityId';//根据URL里的ID获取crmID
const GET_SMS_CODE = SMSDOMAIN + '/api/1/pc/captcha/sms/send';//发送短信验证码
const GET_TRANSFER = LCSDOMAIN + '/api/info/1/user/income';//领取后数据传送

export {
  GET_IMG_TOKEN,
  GET_CRM_ID,
  GET_SMS_CODE,
  GET_TRANSFER
}

let log = (type) => {
  return (target, name, descriptor) => {
    const method = descriptor.value
    descriptor.value = (...args) => {
      Logger.info(`(${type}) before function execute: ${name}(${args}) = ?`)
      let ret;
      try {
        ret = method.apply(target, args)
        Logger.info(`(${type})after function execute success: ${name}(${args}) => ${ret}`)
      } catch (error) {
        Logger.error(`(${type}) function execute error: ${name}(${args}) => ${error}`)
      } finally {
        Logger.info(`(${type}) function execute done: ${name}(${args}) => ${ret}`)
      }
      return ret;
    }
  }
}
export {log}
