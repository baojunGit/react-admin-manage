import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import './index.scss';
interface PropsType {
	target?: () => HTMLElement;
	visibilityHeight?: number;
}

const MyBackTop: React.FC<PropsType> = ({
	target = () => document.documentElement,
	visibilityHeight = 400
}) => {
	const [visible, setVisible] = useState(false);

	// 滚动事件监听函数
	// 只要稍微滚动一下页面，就会触发滚动事件，滚动事件频繁触发，会带来性能问题。
	// 需要添加防抖函数，在500ms内最多执行一次滚动函数，最后的触发生效
	const handleScroll = debounce(() => {
		setVisible(target()?.scrollTop >= visibilityHeight);
	}, 500);

	useEffect(() => {
		// 当第三个参数设置为true就在捕获过程中执行，反之就在冒泡过程中执行处理函数。
		target()?.addEventListener('scroll', handleScroll, true);
		return () => target()?.removeEventListener('scroll', handleScroll);
	}, []);

	// 点击按钮事件处理函数
	const handleScrollTop = () => {
		// window对象没有scrollTop方法，默认是document.documentElement更好
		// document.documentElement.scrollTop === window.scrollY
		// 不然就要写不少类型断言(target() as Window).scrollY
		// 设置滚动行为改为平滑的滚动
		target().scrollTo({ top: 0, behavior: 'smooth' });
		// target().scrollTop = 0;
		// target().scrollTo(0, 0);
	};
	return (
		<>
			{visible && (
				<div className="back-top" onClick={handleScrollTop}>
					<div className="triangle"></div>
				</div>
			)}
		</>
		// 方法2用visibility
		// <div
		//   className='back-top'
		//   style={{ visibility: `${visible ? 'visible' : 'hidden'}` }}
		//   onClick={handleScrollTop}>
		//   <div className='triangle'></div>
		// </div>
	);
};

export default MyBackTop;
