import { Row, Col } from 'antd';
import { HomeTop, QuickNav } from './components';

const Home = () => {
	return (
		<div id="home-container">
			{/* 自适应布局对应的类：
      lg(pc大桌面显示器，≥1200px) md(中等屏幕显示器，≥992px) sm(小屏幕 平板 ≥768px) xs(超小屏幕 手机 <768px)
      gutter值为该单元格左右的padding之和, 即左右各10px  */}
			<Row gutter={20}>
				<Col style={{ marginBottom: '20px' }} span={24}>
					<HomeTop />
				</Col>
				<Col xl={6} lg={6} md={6} sm={24} xs={24}>
					<QuickNav />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
