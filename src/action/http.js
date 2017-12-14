import axios from 'axios';
import {getUrl} from '../config/url'
import queryString from 'query-string'

export const GET = async function(server,urlName,param){
  if(!server || !urlName){
      throw new Error('server or url invalid')
  }
  let url = getUrl(server, urlName);
  url = url + '?' + queryString.stringify(param)
  return await axios.get(url)
}

export const POST = async function(server,urlName,param){
    if(!server || !urlName){
      throw new Error('server or url invalid');
    }
    let url = getUrl(server, urlName);
    return await axios.post(url,queryString.stringify(param))
}
