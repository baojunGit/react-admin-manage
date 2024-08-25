import { Card } from 'antd';
import imgUrl from '@/assets/images/face.gif';
import './index.scss';
import FlipClock from '@/components/FlipClock';

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
				className="box-card"
				style={{
					display: 'flex',
					width: '100%',
					justifyContent: 'space-between'
				}}
			>
				<div className="box-card-left">
					<img
						className="user-avatar"
						width="60px"
						height="60px"
						src={imgUrl}
						alt="头像"
					/>
					<div className="card-left-tip">{handleTip()}</div>
				</div>
				<FlipClock />
			</div>
		</Card>
	);
};

export default Home;
