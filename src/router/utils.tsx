import { Navigate } from 'react-router-dom';
import Layout from '@/Layout';

// 创建一个默认的空组件
const EmptyComponent = () => null;

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
		// 对于外链，使用空组件，注意不能直接等于null
		if (r.path.startsWith('http')) {
			Component = EmptyComponent;
		} else if (r.component === 'Layout') {
			// 如果是 Layout 组件
			Component = Layout;
		} else if (r.component) {
			// 使用动态导入，根据组件路径加载组件
			componentPath = `../views/${r.component}/index.tsx`;
			module = modules[componentPath];

			if (module) {
				Component = module.default;
			} else {
				console.error(`Component at ${componentPath} not found`);
				continue;
			}
		} else {
			console.error(`Component is not defined for route ${r.name}`);
			continue;
		}

		rNew = {
			path: r.path,
			name: r.name,
			element: <Component />,
			children: r.children ? formatRouter(r.children) : []
		};

		// 如果存在子路由且没有设置默认重定向，则添加默认重定向
		if (rNew.children && rNew.children.length > 0) {
			rNew.children.unshift({
				// path为空字符串，表示这个路由的路径与父路由的路径相同
				path: '',
				element: <Navigate to={rNew.children[0].path} />
			});
		}

		routes.push(rNew);
	}

	return routes;
};
