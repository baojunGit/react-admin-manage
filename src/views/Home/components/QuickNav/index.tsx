import { Card, Row, Col } from 'antd';
import AppIcon from '@/components/MyIcon';
import './index.scss';

const QuickNav = () => {
	const navList = [
		{
			name: 'github',
			url: 'https://baidu.com',
			icon: 'iconfont icon-BaiDu'
		},
		{
			name: 'vue',
			url: 'https://www.google.com.hk/',
			icon: 'iconfont icon-Google'
		},
		{
			name: 'react',
			url: 'https://stackoverflow.com/',
			icon: 'iconfont icon-stack-overflow-fill'
		},
		{
			name: 'SOF',
			url: 'https://juejin.cn/',
			icon: 'iconfont icon-juejin-logo'
		},
		{
			name: '掘金',
			url: 'https://www.jianshu.com/',
			icon: 'iconfont icon-jianshu'
		},
		{
			name: '简书',
			url: 'https://segmentfault.com/',
			icon: 'iconfont icon-segmentfault'
		}
	];
	return (
		<Card
			title={
				<div>
					<AppIcon />
					快捷导航
				</div>
			}
			styles={{
				body: { padding: 0 }
			}}
		>
			<Row>
				{navList.map(({ name, icon }, index) => (
					<Col key={index} xl={8} lg={8} md={8} sm={12} xs={12}>
						<div className="search-nav-item">
							<i className={icon}></i>
							{name}
						</div>
					</Col>
				))}
			</Row>
		</Card>
	);
};

export default QuickNav;
