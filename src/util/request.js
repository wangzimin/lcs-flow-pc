import axios from 'axios'
import store from '@/store'
import localstorage from './localStorage'

axios.defaults.timeout = 30 * 1000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class Request {
	/**
	 * getRequest => http get
	 * @param url
	 * @param params
	 * @returns {*}
	 */
	async get(url, params, opts){
		let urlStr = url  + `?${this.translateParams(params)}`;
		let parameters = {
			url: params ? urlStr : url,
			method: 'get'
		}
		//if(opts){
		//	Object.assign(parameters,opts)
		//}
		let data = await axios.request(parameters);
		this.handleExpiredLogin(data);
		return data.data;
	}

	/**
	 * postRequest => http post
	 * @param url
	 * @param params
	 * @returns {*}
	 */
	async post(url, params, opts){
		let parameters = {
			url: url,
			method: 'post',
			data: this.translateParams(params),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		};
		let data = await axios.request(parameters);
		this.handleExpiredLogin(data);
		return data.data;
	}

	/**
	 * translate obj params to string with &
	 * @param params
	 * @returns {string}
	 */
	translateParams(params){
		let url = '';
		for (let param in params) {
			url += `${param}=${params[param]}&`
		}
		return url.substring(0, url.length - 1);
	}

	handleExpiredLogin (data) {

	}
}

export default new Request()

