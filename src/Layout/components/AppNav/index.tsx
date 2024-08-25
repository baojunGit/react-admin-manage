import { Col, Row } from 'antd';
import {
	Hamburger,
	NavBreadcrumb,
	AppNotice,
	AppScreenFull,
	Language,
	AppTheme,
	PageRefresh,
	UserAvatar
} from './components';

const AppNav = () => {
	return (
		<div className="app-nav">
			<Row className="nav-row" gutter={16}>
				<Col xl={12} lg={12} md={12} sm={12} xs={2}>
					<div className="left-panel">
						<Hamburger />
						<NavBreadcrumb />
					</div>
				</Col>
				<Col xl={12} lg={12} md={12} sm={12} xs={22}>
					<div className="right-panel">
						{/* 通知 */}
						<AppNotice />
						{/* 全屏 */}
						<AppScreenFull />
						{/* 国际化 */}
						<Language />
						{/* 主题配置 */}
						<AppTheme />
						{/* 页面刷新 */}
						<PageRefresh />
						{/* 用户头像 */}
						<UserAvatar />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AppNav;
