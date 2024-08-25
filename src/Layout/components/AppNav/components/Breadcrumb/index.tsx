import { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { getRouteList } from './util';
import { useMenuStore } from '@/store';

const NavBreadcrumb = () => {
	const { menuList } = useMenuStore();
	const { pathname } = useLocation();
	// const breadcrumbList = pathname.split('/').filter((item) => {
	//   return Boolean(item);
	// });
	const [breadcrumbList, setBreadcrumbList] = useState([]);

	useEffect(() => {
		const routeList = getRouteList(menuList, pathname);
		setBreadcrumbList(routeList);
	}, [pathname]);
	return (
		<Breadcrumb separator=">">
			{breadcrumbList.map(item => (
				<Breadcrumb.Item key={item.path}>
					<span>{item.name}</span>
				</Breadcrumb.Item>
			))}
		</Breadcrumb>
	);
};

export default NavBreadcrumb;
