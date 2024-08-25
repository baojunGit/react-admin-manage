import { Card } from 'antd';
import styles from './index.module.scss';

const Hover3 = () => {
	const arr = [
		{
			id: 1,
			title: '2022第一季度报告'
		},
		{
			id: 2,
			title: '2022第二季度报告'
		},
		{
			id: 3,
			title: '2022上半年报告'
		}
	];
	return (
		<Card title="3D翻转效果" style={{ width: '100%', marginBottom: '20px' }}>
			<div className={styles['hover3']}>
				{arr.map(({ title }, index) => (
					<div className={styles['item']} key={index}>
						<div className={styles['flip-box']}>
							<div className={styles['front']}>{title}</div>
							<div className={styles['back']}>点击查看</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default Hover3;
