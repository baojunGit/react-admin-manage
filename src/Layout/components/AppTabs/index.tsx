import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { useMenuStore, useTabStore } from '@/store';
import { getRouteItem } from '../AppSidebar/components/util';
import MoreButton from './components/MoreButton';
import './index.scss';
const { TabPane } = Tabs;

const AppTabs = () => {
	const { menuList } = useMenuStore();
	const { addVisitedTab, delVisitedTab, getVisitedTabs } = useTabStore();
	console.log(getVisitedTabs());
	console.log(menuList);
	const visitedTabs = getVisitedTabs() || [];
	const { pathname } = useLocation();
	useEffect(() => {
		console.log(menuList);
		const item = getRouteItem(menuList, pathname);
		const tab = { name: item?.name, path: item?.path };
		addVisitedTab(tab);
	}, [pathname]);

	const navigate = useNavigate();
	const clickTab = (path: string) => {
		navigate(path);
	};

	// 跳转最后一个页签
	const toLatestTab = path => {
		const latestTab = visitedTabs
			.filter(item => item.path !== path)
			.slice(-1)[0];
		if (latestTab) navigate(latestTab.path);
		else navigate('/home');
	};

	const delTabs = path => {
		delVisitedTab(path);
		toLatestTab(path);
	};
	return (
		<div className="app-tabs">
			{/* 只有type='editable-card'的时候，才有关闭和增加按钮 */}
			<Tabs
				type="editable-card"
				hideAdd
				activeKey={pathname}
				onChange={clickTab}
				onEdit={path => {
					delTabs(path as string);
				}}
				tabBarGutter={0}
			>
				{visitedTabs.map(item => (
					<TabPane
						key={item.path}
						tab={
							<span>
								{item.path === '/home' ? <HomeFilled /> : ''}
								{item.name}
							</span>
						}
						closable={item.path !== '/home'}
					></TabPane>
				))}
			</Tabs>
			<MoreButton />
		</div>
	);
};

export default AppTabs;
