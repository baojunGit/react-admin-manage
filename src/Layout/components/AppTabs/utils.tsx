// 辅助函数，确保路径拼接时保留根路径且不出现多余的斜杠
export const normalizePath = path => {
	// 如果路径不以 / 开头，添加一个 / 作为前缀
	if (!path.startsWith('/')) {
		path = '/' + path;
	}
	// 使用 replace(/\/+/g, '/') 确保路径中不会有多余的斜杠
	return path.replace(/\/+/g, '/');
};

/**
 * 根据路径获取路由项，并拼接父路由的路径
 * @param {Array} arr - 路由配置数组
 * @param {string} queryPath - 查询的路径
 * @param {string} parentPath - 父路由的路径
 * @returns {Object | undefined} 返回拼接了完整路径的路由项或 undefined
 */
export const getTabItem = (arr, queryPath, parentPath = '') => {
	let routeInfo;

	for (const item of arr) {
		const { path, children, noCloseTab } = item;

		// 拼接当前路径与父路径
		const fullPath = normalizePath(parentPath ? `${parentPath}/${path}` : path);
		if (queryPath === path) {
			routeInfo = {
				...item,
				path: fullPath,
				meta: {
					noCloseTab: noCloseTab
				}
			};
			break;
		}

		if (children) {
			routeInfo = getTabItem(children, queryPath, fullPath);
			if (routeInfo) return routeInfo;
		}
	}

	return routeInfo;
};
