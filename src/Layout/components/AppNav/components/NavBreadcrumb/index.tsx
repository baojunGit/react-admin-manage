import { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { getRouteList } from './util';
import { useMenuStore } from '@/store';

const NavBreadcrumb = () => {
	const { menuList } = useMenuStore();
	const { pathname } = useLocation();
	const [breadcrumbItems, setBreadcrumbItems] = useState([]);

	useEffect(() => {
		const routeList = getRouteList(menuList, pathname);
		const items = routeList.map(item => ({
			key: item.path,
			title: <span>{item.name}</span>
		}));
		setBreadcrumbItems(items);
	}, [pathname]);

	return <Breadcrumb separator=">" items={breadcrumbItems} />;
};

export default NavBreadcrumb;
