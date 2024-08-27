import { Card, Row, Col } from 'antd';
import styles from './index.module.scss';
import MyColorfulCard from './MyColorfulCard';

const list = [
	{
		title: 'vue-admin-manage',
		description: '一款基于vue3 + element-plus的后台管理系统',
		colorFrom: '#1f94ff',
		colorTo: '#77e19d',
		icon: 'iconfont icon-vuejs-line',
		url: 'https://github.com/baojunGit/vue-admin-manage'
	},
	{
		title: 'react-admin-manage',
		description: '一款基于react18 + ant-design的后台管理系统',
		colorFrom: '#77e19d',
		colorTo: '#1f94ff',
		icon: 'iconfont icon-reactjs-line',
		url: 'https://github.com/baojunGit/react-admin-manage'
	}
];

const handleOpenWindow = (url: string) => {
	window.open(url);
};

const MyProject: React.FC = () => {
	return (
		<div className={styles['my-project']}>
			<Card
				title={
					<div className={styles['card-header']}>
						<i className="iconfont icon-github-line" /> 我的项目
					</div>
				}
			>
				<Row gutter={20}>
					{list.map((item, index) => (
						<Col key={index} xs={24} sm={24} md={12} lg={12} xl={12}>
							<MyColorfulCard
								colorFrom={item.colorFrom}
								colorTo={item.colorTo}
								icon={item.icon}
								height="212px"
								shadow="hover"
								title={item.title}
								onClick={() => handleOpenWindow(item.url)}
							>
								<div className={styles['card-desc']}>{item.description}</div>
							</MyColorfulCard>
						</Col>
					))}
				</Row>
			</Card>
		</div>
	);
};

export default MyProject;
