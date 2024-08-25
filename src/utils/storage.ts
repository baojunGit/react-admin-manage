/**
 * 根据 key 值获取储存在 storage 中的值
 * 存在storage里的true和false，取出都会是字符串, 所以要用JSON转译方法存入再取出，才不会影响数字和布尔类型
 * @param key storage key
 * @returns
 */

const handleStorage = $storage => {
	const get = key => {
		let value = $storage.getItem(key);
		try {
			value = JSON.parse(value);
			return value;
		} catch {
			return value;
		}
	};

	/**
	 * 根据 key 值向 storage 中储存值
	 * @param key storage key
	 * @param value 需要储存在 storage 中的值
	 */
	const set = (key, value) => {
		return $storage.setItem(key, value ? JSON.stringify(value) : value);
	};

	/**
	 * 根据 key 值移除储存在 storage 中的值
	 * @param key storage key
	 */
	const remove = key => {
		return $storage.removeItem(key);
	};

	/**
	 * 移除除了 key 之外的所有储存在 storage 中的值
	 * @param key storage key
	 */
	const clearExcept = key => {
		for (let i = 0; i < $storage.length; i++) {
			const itemKey = $storage.key(i);
			if (itemKey && itemKey !== key) {
				$storage.removeItem(itemKey);
			}
		}
	};

	/**
	 * 移除所有储存在 storage 中的值
	 */
	const clearAll = () => {
		for (const itemKey in $storage) {
			if (itemKey) {
				$storage.removeItem(itemKey);
			}
		}
	};

	return {
		get,
		set,
		remove,
		clearExcept,
		clearAll
	};
};

const sessionConfig = handleStorage(window.sessionStorage || sessionStorage);
const localConfig = handleStorage(window.localStorage || localStorage);

const getSession = sessionConfig.get;
const setSession = sessionConfig.set;
const removeSession = sessionConfig.remove;
const clearExceptSession = sessionConfig.clearExcept;
const clearAllSession = sessionConfig.clearAll;

const getLocal = localConfig.get;
const setLocal = localConfig.set;
const removeLocal = localConfig.remove;
const clearExceptLocal = localConfig.clearExcept;
const clearAllLocal = localConfig.clearAll;

export {
	getSession,
	setSession,
	removeSession,
	clearExceptSession,
	clearAllSession,
	getLocal,
	setLocal,
	removeLocal,
	clearExceptLocal,
	clearAllLocal
};
