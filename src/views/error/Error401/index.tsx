import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import four from '@/assets/images/401.png';
import cloud from '@/assets/images/cloud.png';
import '../error.scss';

const Error401 = () => {
	const navigate = useNavigate();
	const toPage = () => {
		navigate('/home');
	};
	const [time, setTime] = useState(5);
	const latestTime = useRef(time);
	latestTime.current = time;
	useEffect(() => {
		const timer = setInterval(() => {
			if (latestTime.current === 0) {
				toPage();
				return;
			}
			setTime(t => --t);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div id="error-container">
			<div className="not-found-content">
				<div className="pic-error">
					<img src={four} alt="" className="pic-error__parent" />
					<img src={cloud} alt="" className="pic-error__child left" />
					<img src={cloud} alt="" className="pic-error__child mid" />
					<img src={cloud} alt="" className="pic-error__child right" />
				</div>
				<div className="bullshit">
					<div className="bullshit__oops">401</div>
					<div className="bullshit__headline">您没有操作权限...</div>
					<div className="bullshit__info">
						当前帐号没有操作权限，请联系管理员
					</div>
					<Button size="large" type="primary" shape="round" onClick={toPage}>
						{time}s后 返回首页
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Error401;
