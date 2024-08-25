import MyBackTop from '@/components/MyBackTop';
import { useMenuStore } from '@/store';
import './index.scss';
import { AppSidebar, AppNav, AppTabs, AppPage } from './components';

const Layout = () => {
	const { collapse } = useMenuStore();
	return (
		<div id="layout">
			<div
				className={`layout-container ${!collapse ? 'openSidebar' : 'closeSidebar'}`}
			>
				<AppSidebar />
				<main className="app-main">
					<div className="app-header">
						{/* 网站顶部导航栏 */}
						<AppNav />
						<AppTabs />
					</div>
					{/* 页面内容区 */}
					<AppPage  />
				</main>
			</div>
			{/* 是要在app-page里识别滚动 */}
			{/* <BackTop
        target={() => document.getElementById('app-page')}
        visibilityHeight={100}
      /> */}
			<MyBackTop
				// querySelector() 方法可以用于返回文档中匹配指定 CSS 选择器的一个元素，
				// 如果需要返回所有的元素，就需要使用querySelectorAll() 方法
				target={() => document.querySelector('#app-page')}
				visibilityHeight={100}
			/>
		</div>
	);
};

export default Layout;
