import { createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/Layout';
import { getMenuList } from '@/api/menu';
import { useMenuStore } from '@/store';
import Redirect from '@/views/Redirect/index';
import Error404 from '@/views/error/Error404/index';
import Error401 from '@/views/error/Error404/index';
// layout布局组件不用懒加载，懒加载本身也会增加一些额外的开销
import publicRoutes from './publicRoutes';
import PrivateRoute from './PrivateRoute';
import { formatRouter } from './utils';

// 自定义 Hook
// 获取菜单列表并生成路由配置
const useRouterInstance = () => {
	const [routerInstance, setRouterInstance] = useState(null);
	const { setMenu } = useMenuStore();
	useEffect(() => {
		const fetchAndSetRouter = async () => {
			try {
				const res = await getMenuList(); // 从API获取动态路由配置
				const data = res?.data || [];
				setMenu(data);
				const dynamicRoutes = formatRouter(data); // 转换为react-router支持的路由格式

				const routes = [
					...publicRoutes,

					// 嵌套路由重定向
					// 方法1
					// { path: '/', element: <Navigate to="home" /> },
					// 方法2
					// {
					//     // index: true 指定了该路由规则是默认的索引路由。当用户访问根路径 / 时，将会匹配到该路由规则，并渲染指定的元素
					//     index: true,
					//     element: <Navigate replace to="/portal/home" />
					// },
					// 重定向路径中斜杠的含义：
					// 1. 有斜杠 /：绝对路径，重定向到根路径下的 /home
					// 2. 没有斜杠 /：相对路径，重定向到当前路径的基础上再加上 home

					// 这里把element当成children另一种形式来用
					...dynamicRoutes.map(route => ({
						...route,
						element: <PrivateRoute element={route.element} />
					})),
					{
						path: 'redirect/*',
						element: <Layout />,
						children: [
							{
								path: '*',
								element: <Redirect />
							}
						]
					},
					{ path: '*', element: <Error404 /> },
					{ path: '401', element: <Error401 /> }
				];

				const router = createBrowserRouter(routes);
				setRouterInstance(router);
			} catch (error) {
				console.error('Failed to fetch routes:', error);
			}
		};

		fetchAndSetRouter();
	}, []);

	return routerInstance;
};

export default useRouterInstance;
