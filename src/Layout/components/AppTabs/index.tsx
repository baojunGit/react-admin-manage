import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { useMenuStore, useTabStore } from '@/store';
import { getTabItem } from './utils';
import MoreButton from './components/MoreButton';
import './index.scss';

const AppTabs = () => {
	const { menuList } = useMenuStore();
	const { addVisitedTab, delVisitedTab, getVisitedTabs } = useTabStore();
	const visitedTabs = getVisitedTabs() || [];
	const { pathname } = useLocation();

	useEffect(() => {
		console.log(menuList);
		const currentPath = pathname.split('/').pop();
		const item = getTabItem(menuList, currentPath);
		const tab = { name: item?.name, path: item?.path };
		console.log(tab);
		addVisitedTab(tab);
	}, [pathname]);

	const navigate = useNavigate();
	const clickTab = (path: string) => {
		console.log(path);
		navigate(path);
	};

	// 跳转最后一个页签
	const toLatestTab = (path: string) => {
		const latestTab = visitedTabs
			.filter(item => item.path !== path)
			.slice(-1)[0];
		if (latestTab) navigate(latestTab.path);
		else navigate('/home');
	};

	const delTabs = (path: string) => {
		delVisitedTab(path);
		toLatestTab(path);
	};

	// 使用 items 属性代替 TabPane
	const tabItems = visitedTabs.map(item => ({
		key: item.path,
		label: (
			<span>
				{item.path === '/home' ? <HomeFilled /> : ''}
				{item.name}
			</span>
		),
		closable: item.path !== '/home'
	}));

	return (
		<div className="app-tabs">
			<Tabs
				type="editable-card"
				hideAdd
				activeKey={pathname}
				onChange={clickTab}
				onEdit={path => {
					delTabs(path as string);
				}}
				tabBarGutter={0}
				items={tabItems} // 使用 items 属性
			/>
			<MoreButton />
		</div>
	);
};

export default AppTabs;
