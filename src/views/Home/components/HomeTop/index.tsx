import { Card } from 'antd';
import { faceGif } from '@/config/getImg';
import FlipClock from '@/components/FlipClock';
import styles from './index.module.scss';

const Home = () => {
	const handleTip = () => {
		const hour = new Date().getHours();
		return hour < 8
			? `早安，管理员，新的一天新的开始`
			: hour <= 11
				? `上午好，管理员，一日之计在于晨`
				: hour <= 13
					? `午安，管理员，记得休息一下哦`
					: hour < 18
						? `下午好，管理员，下个早班吧`
						: `晚上好，管理员，愿你三冬暖，愿你春不寒`;
	};
	return (
		<Card
			styles={{
				body: { height: '150px', display: 'flex', alignItems: 'center' }
			}}
		>
			<div
				className={styles['box-card']}
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between'
				}}
			>
				<div className={styles['box-card-left']}>
					<img
						className={styles['user-avatar']}
						width="60px"
						height="60px"
						src={faceGif}
						alt="头像"
					/>
					<div className={styles['card-left-tip']}>{handleTip()}</div>
				</div>
				<FlipClock />
			</div>
		</Card>
	);
};

export default Home;
