import { useEffect, useRef } from 'react';
import FlipItem from './FlipItem';
import { formatDate } from '@/utils/date';
import './index.scss';

const FlipClock = () => {
	const flipperHour1 = useRef(null);
	const flipperHour2 = useRef(null);
	const flipperMinute1 = useRef(null);
	const flipperMinute2 = useRef(null);
	const flipperSecond1 = useRef(null);
	const flipperSecond2 = useRef(null);
	const flipObjs = useRef<any[]>([]);
	flipObjs.current = [
		flipperHour1,
		flipperHour2,
		flipperMinute1,
		flipperMinute2,
		flipperSecond1,
		flipperSecond2
	];

	// 初始化数字
	const initNum = () => {
		const now = new Date();
		const nowTimeStr = formatDate(new Date(now.getTime()), 'hhiiss');
		for (let i = 0; i < flipObjs.current.length; i++) {
			flipObjs.current[i].current.setFront(nowTimeStr[i]);
		}
	};

	// 存储定时器的变量
	let timer;

	// 开始计时
	const runTime = () => {
		timer = setInterval(() => {
			// 获取当前时间
			const now = new Date();
			const nowTimeStr = formatDate(new Date(now.getTime() - 1000), 'hhiiss');
			const nextTimeStr = formatDate(now, 'hhiiss');
			for (let i = 0; i < flipObjs.current.length; i++) {
				if (nowTimeStr[i] === nextTimeStr[i]) {
					continue;
				}
				flipObjs.current[i].current.flipDown(nowTimeStr[i], nextTimeStr[i]);
			}
		}, 1000);
	};

	useEffect(() => {
		initNum();
		runTime();
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="flip-clock">
			<FlipItem ref={flipperHour1} />
			<FlipItem ref={flipperHour2} />
			<em>:</em>
			<FlipItem ref={flipperMinute1} />
			<FlipItem ref={flipperMinute2} />
			<em>:</em>
			<FlipItem ref={flipperSecond1} />
			<FlipItem ref={flipperSecond2} />
		</div>
	);
};

export default FlipClock;
