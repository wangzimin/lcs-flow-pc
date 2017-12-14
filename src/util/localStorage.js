class localStorage {
	/**
	 * set storage
	 * @param key
	 * @param value
	 */
	setStorage(key, value) {
		if (!window.localStorage) {
			throw new Error('该浏览器不支持localStorage');//
		} else {
			// console.log()
			if (typeof value == 'object') {
				window.localStorage.setItem(key, window.JSON.stringify(value))
			} else {
				window.localStorage.setItem(key, value)
			}
		}
	}
	/**
	 * get storage
	 * @param key
	 */
	getStorage(key) {
		if (!window.localStorage) {
			throw new Error('该浏览器不支持localStorage');//
		} else {
			return window.localStorage.getItem(key)
		}
	}
	/**
	 * remove by key
	 * @param key
	 */
	delStorage(key) {
		window.localStorage.removeItem(key)
	}

	//clear all storage
	clearAllStorage() {
		window.localStorage.clear()
	}
}

export default new localStorage()