import { Card } from 'antd';
import styles from './index.module.scss';

const Hover2 = () => {
	const arr = [
		{
			id: 1,
			isNew: 0,
			title: '报工明细查询',
			desc: '报工清单数据，将电子看板报工和VP的报工进行融合',
			icon: 'iconfont icon-app'
		},
		{
			id: 2,
			isNew: 1,
			title: '不符合项查询',
			desc: 'QA审计发现的不符合项信息',
			icon: 'iconfont icon-app'
		},
		{
			id: 3,
			isNew: 1,
			title: '卡片查询',
			desc: '来自协同工作平台的卡片信息',
			icon: 'iconfont icon-app'
		}
	];
	return (
		<Card
			title="上下偏移（下划线跟随）"
			style={{ width: '100%', marginBottom: '20px' }}
		>
			<div className={styles['hover2']}>
				{arr.map(({ title, desc, icon }, index) => (
					<div className={styles['item']} key={index}>
						<i className={icon}></i>
						<h6>{title}</h6>
						<p>{desc}</p>
					</div>
				))}
			</div>
		</Card>
	);
};

export default Hover2;
