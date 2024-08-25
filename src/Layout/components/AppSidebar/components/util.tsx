/**
 * @description 从路由表中获取有用的菜单信息
 * @param routes 路由数组
 * @return array 返回匹配的菜单列表
 */

export const formatMenu = routeList => {
	const routes = [];
	let rNew;
	for (let r of routeList) {
		// 去掉layout，不在侧边栏显示
		if (r?.name === 'layout') r = r?.children[0];
		const icon = r.icon ? <i className={r.icon}></i> : null;
		rNew = {
			label: r?.name,
			key: r.path,
			icon: icon
		};
		if (r.children) {
			const children = formatMenu(r.children);
			rNew = { ...rNew, children: children };
		} else {
			rNew = { ...rNew };
		}
		routes.push(rNew);
	}
	return routes;
};

/**
 * @description 用来获取当前URL相关的路由信息
 * @param arr 路由数组
 * @param queryItem 当前的URL地址
 * @returns 返回匹配的路由信息
 */
export const getRouteItem = (arr, queryPath) => {
	// ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，
	// keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
	let routeInfo;
	for (const item of arr) {
		const { path, children } = item;
		if (queryPath === path) {
			routeInfo = item;
			// break立即终止循环，并跳出循环体
			break;
		}
		if (children) {
			routeInfo = getRouteItem(children, queryPath);
			// 这里一定要判定返回值是否为真，否则轮询执行一层循环后，
			// 如果没找到符合条件的值，将直接返回undefined，并跳出循环
			if (routeInfo) return routeInfo;
		}
	}
	return routeInfo;
};

/**
 * @description 获取需要展开的subMenu
 * @param path 当前访问路由地址
 * @returns array 返回匹配的菜单数组
 */
export const getOpenKeys = (path: string) => {
	let newStr: string = '';
	let newArr: any[] = [];
	let arr = path.split('/').map(i => '/' + i);
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i];
		newArr.push(newStr);
	}
	return newArr;
};
