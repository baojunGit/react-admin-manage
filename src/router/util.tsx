import React from 'react';
import Layout from '@/Layout';

// 用于静态导入的组件映射表
const componentMap = {
	Home: () => import('@/views/Home/index.tsx'),
	'System/User': () => import('@/views/system/User/index.tsx'),
	'System/Role': () => import('@/views/system/Role/index.tsx'),
	'System/Menu': () => import('@/views/system/Menu/index.tsx'),
	'System/Dict': () => import('@/views/system/Dict/index.tsx'),
	'Case/Hover': () => import('@/views/case/Hover/index.tsx'),
	'Case/DataView': () => import('@/views/case/DataView/index.tsx'),
	'Case/LoadingModule': () => import('@/views/case/LoadingModule/index.tsx'),
	Error: () => import('@/views/error/index.tsx'),
	'Error/401': () => import('@/views/error/Error401/index.tsx'),
	'Error/404': () => import('@/views/error/Error404/index.tsx'),
	'Iframe/React': () => import('@/views/iframe/React/index.tsx')
};

export const formatRouter = menuList => {
	const routes = [];
	let rNew;
	let Component;

	for (const r of menuList) {
		switch (r.component) {
			case 'layout':
				Component = <Layout />;
				break;
			default:
				// 使用静态导入，根据映射表中的路径导入组件
				Component = React.createElement(React.lazy(componentMap[r.component]));
		}

		rNew = {
			path: r.path,
			name: r.name,
			element: Component
		};

		if (r.children) {
			const children = formatRouter(r.children);
			rNew = { ...rNew, children: children };
		}

		routes.push(rNew);
	}

	return routes;
};
