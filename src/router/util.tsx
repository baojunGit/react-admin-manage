import Layout from '@/Layout';

// 使用 import.meta.glob 动态导入组件并立即解析
const modules = import.meta.glob('../views/**/index.tsx', { eager: true });
// 动态格式化路由配置
export const formatRouter = menuList => {
	// const、let 和 var 这些关键字不能直接在 case 语句块中使用，因为 case 语句块并不会创建新的作用域
	const routes = [];
	let rNew;
	let Component;
	let componentPath;
	let module;

	for (const r of menuList) {
		switch (r.component) {
			case 'Layout':
				Component = Layout;
				break;
			default:
				// 使用动态导入，根据组件路径加载组件
				componentPath = `../views/${r.component}/index.tsx`;
				module = modules[componentPath];
				console.log(module);
				if (module) {
					Component = module.default;
				} else {
					console.error(`Component at ${componentPath} not found`);
					continue;
				}
		}

		rNew = {
			path: r.path,
			name: r.name,
			element: <Component />
		};

		if (r.children) {
			const children = formatRouter(r.children);
			rNew = { ...rNew, children: children };
		}

		routes.push(rNew);
	}

	return routes;
};
