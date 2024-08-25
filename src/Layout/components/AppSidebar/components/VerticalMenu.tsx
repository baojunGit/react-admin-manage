import { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMenuStore } from '@/store';
import { formatMenu, getOpenKeys, getRouteItem } from './util';

const VerticalMenu = () => {
	// const menu = [
	//   {
	//     label: '首页',
	//     key: '/home',
	//     icon: <i className='iconfont icon-index'></i>,
	//   }, // 菜单项务必填写 key
	// ];
	const { menuList, collapse } = useMenuStore();

	const menu = formatMenu(menuList);
	// 获取当前路径
	const { pathname } = useLocation();

	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	// 刷新页面，当侧边栏不收缩的时候，获取需要展开的subMenu，保持高亮
	useEffect(() => {
		setSelectedKeys([pathname]);
		!collapse && setOpenKeys(getOpenKeys(pathname));
	}, [pathname, collapse]);

	// 回调参数：所有展开的submenu的key数组
	const onOpenChange = openKeys => {
		// 没打开submenu和打开一个的情况
		if (openKeys.length <= 1) return setOpenKeys(openKeys);
		// 如果展开的submenu是多个，获取最后一个展开的submenu
		const latestOpenKey = openKeys[openKeys.length - 1];
		// 如果展开的最后一个submenu全名包含第一个submenu，证明是嵌套路由
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		// 如果展开的最后一个submenu不包含第一个submenu，证明是打开了新类的submenu
		setOpenKeys([latestOpenKey]);
	};

	const navigate = useNavigate();
	// 回调参数key，keyPath
	const goPage = ({ key, keyPath }) => {
		const url = '/' + keyPath.reverse().join('/');
		// 判断是否网址链接，如果是就打开新窗口
		if (/http(s)?:/.test(url)) {
			window.open(url, '_blank');
			return;
		}
		const { frameSrc } = getRouteItem(menuList, key);
		if (frameSrc) {
			// 为什么需要对url进行编码和解码
			// 1.在 URL 地址中，不允许出现非 ASCII 字符，如果 URL 地址中需要包含中文字符，就必须对中文字符进行编码（转义）
			// 2.在 URL 参数字符串中用 key=value 这种键值对的形式进行传递参数，多个键值对中间用 & 连接。
			// 如果在 value 中也存在 & 这个符号的话，不对其进行编码，就会引起歧义。

			// encodeURI() 和 encodeURIComponent()区别
			// 相同点：都是对 URI 进行编码。
			// 不同点：encodeURI 通常用于转码整个 URI，而 encodeURIComponent 主要是用来转码 URI 的组成部分（？后面的参数部分）
			const embeddedUrl = encodeURIComponent(frameSrc);
			navigate(`${url}?url=${embeddedUrl}`);
			return;
		}
		navigate(url);
	};
	return (
		// defaultSelectedKeys	初始选中的菜单项 key 数组
		// selectedKeys 当前选中的菜单项 key 数组
		// defaultOpenKey只在刚开始时影响一次，openKey数据变化后就更新，也就是传说中的受控与非受控组件的应用
		// openKeys 当前展开的 SubMenu 菜单项 key 数组，用于设置只展开一项
		// onOpenChange SubMenu 展开/关闭的回调
		<Menu
			className="vertical-menu"
			mode="inline"
			theme="light"
			items={menu}
			onOpenChange={onOpenChange}
			openKeys={openKeys}
			selectedKeys={selectedKeys}
			triggerSubMenuAction="click"
			onClick={goPage}
			// inlineCollapsed={!open}
		/>
	);
};

export default VerticalMenu;
