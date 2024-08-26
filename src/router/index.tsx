import { Navigate, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/Layout';
import { getMenuList } from '@/api/menu';
import { useMenuStore } from '@/store';
import Redirect from '@/views/Redirect/index';
import Error404 from '@/views/error/Error404/index';
import Error401 from '@/views/error/Error404/index';
// layout布局组件不用懒加载，懒加载本身也会增加一些额外的开销
import publicRoutes from './publicRoutes';
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
					// 嵌套路由重定向, 在要实现重定向的一级路由声明两次element属性，一个代表当前路径所展示的页面，另一个表示重定向路径。
					// to里面用/home和hom都可以，虽然结果一样，表示的意思不同
					// 1.有斜杠 /：表示绝对路径，重定向到网站的根路径下的 /home
					// 2.没有斜杠 /：表示相对路径，重定向到当前路径的基础上再加上 home
					{ path: '/', element: <Navigate to="home" /> },
					...dynamicRoutes,
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
