import { Row, Col } from 'antd';
import {
	HomeTop,
	QuickNav,
	TodoList,
	VersionInfo,
	MyProject
} from './components';

const Home = () => {
	return (
		<div id="home-container">
			{/* 自适应布局对应的类：
      lg(pc大桌面显示器，≥1200px) md(中等屏幕显示器，≥992px) sm(小屏幕 平板 ≥768px) xs(超小屏幕 手机 <768px)
      gutter={20}只设置列间距，要设置行间距可以用下面数组的方式  */}
			<Row gutter={[20, 20]}>
				<Col style={{ marginBottom: '20px' }} span={24}>
					<HomeTop />
				</Col>
				<Col xl={6} lg={6} md={6} sm={24} xs={24}>
					<QuickNav />
				</Col>
				<Col xl={18} lg={18} md={18} sm={24} xs={24}>
					<TodoList />
				</Col>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<VersionInfo />
				</Col>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<MyProject />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
