import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMenuStore } from '@/store';
import { formatMenu, getOpenKeys, getRouteItem } from './util';

const VerticalMenu = () => {
	const { menuList, collapse } = useMenuStore();
	const menu = formatMenu(menuList);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>(getOpenKeys(pathname));

	// 当路由改变时，高亮和展开对应的菜单
	useEffect(() => {
		// 获取当前页面的路径，并去掉开头的斜杠
		const path = pathname.slice(1);
		// 将路径字符串根据斜杠分割成数组
		const pathArray = path.split('/');
		// 如果是重定向地址，就不要重新设置侧边栏，会闪烁
		if (pathArray.includes('redirect')) {
			return;
		}
		setSelectedKeys(pathArray);

		// 获取当前路径的展开项
		setOpenKeys([pathArray[0]]);
	}, [pathname]);

	// 菜单点击时导航
	const goPage = ({ key, keyPath }) => {
		// console.log(keyPath);
		const url = '/' + keyPath.reverse().join('/');
		const externalUrl = keyPath.find(item => item.includes('http'));
		// 判断是否网址链接，如果是就打开新窗口
		if (externalUrl) {
			window.open(externalUrl, '_blank');
			return;
		}

		const { frameSrc } = getRouteItem(menuList, key);
		if (frameSrc) {
			const embeddedUrl = encodeURIComponent(frameSrc);
			navigate(`${url}?url=${embeddedUrl}`);
			return;
		}
		navigate(url);
	};

	return (
		<Menu
			className="vertical-menu"
			mode="inline"
			theme="light"
			items={menu}
			// 菜单展开/关闭的回调函数
			onOpenChange={keys => setOpenKeys(keys)}
			openKeys={openKeys}
			selectedKeys={selectedKeys}
			onClick={goPage}
			// inline 时菜单是否收起状态
			inlineCollapsed={collapse}
		/>
	);
};

export default VerticalMenu;
