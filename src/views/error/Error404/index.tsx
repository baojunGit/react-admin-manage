import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import four from '@/assets/images/404.png';
import cloud from '@/assets/images/cloud.png';
import '../error.scss';

const Error404 = () => {
	const navigate = useNavigate();
	const toPage = () => {
		navigate('/home');
	};
	const [time, setTime] = useState(5);
	const latestTime = useRef(time);
	// 更新latestTime
	latestTime.current = time;
	// 执行定时器
	useEffect(() => {
		const timer = setInterval(() => {
			if (latestTime.current === 0) {
				toPage();
				return;
			}
			// 注:在setCount中使用箭头函数是最好方式之一
			setTime(t => --t);
		}, 1000);
		// 解绑副作用，return返回一个清理函数
		// 如果第二个参数是空数组，清理函数在组件被销毁之前执行
		// 如果第二个参数不是空数组，只要状态变化，会在执行当前副作用之前，清理上一个副作用
		return () => {
			// console.log('timer', timer);
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
					<div className="bullshit__oops">404</div>
					<div className="bullshit__headline">当前页面不存在...</div>
					<div className="bullshit__info">
						请检查您输入的网址是否正确，或者点击下面的按钮返回首页。
					</div>
					<Button size="large" type="primary" shape="round" onClick={toPage}>
						{time}s后 返回首页
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Error404;
