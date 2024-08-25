/**
 * @description 递归查询对应的页面路由信息
 * @param {Array} routes 包含配置项的路由数组
 * @param {String} pathname 当前路径
 * @param {String} basePath 基本路径，用于构建完整的路径
 * @returns meta
 */
export const findRouteMeta = (routes, pathname, basePath = '') => {
	for (const route of routes) {
		// 过滤掉没有 path 属性的路由对象
		if (!route.path) {
			continue;
		}

		// .replace(/\/+/g, '/') 是一个正则表达式的替换操作，它用于处理路径中的多个连续斜杠，将它们替换为单个斜杠
		const fullPath = `${basePath}/${route.path}`.replace(/\/+/g, '/');
		if (pathname === fullPath) {
			if (Object.keys(route?.meta || {})?.length !== 0) {
				return route?.meta; // 如果找到具有 meta 的路由，返回它
			}
		}
		// 如果当前路由有子路由，递归查找
		if (route.children) {
			const meta = findRouteMeta(route?.children, pathname, fullPath);
			if (Object.keys(meta || {})?.length !== 0) {
				return meta;
			}
		}
	}
	return {}; // 如果没有找到匹配的路由，返回空对象
};
