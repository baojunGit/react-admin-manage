import { useLocation, useOutlet } from 'react-router-dom';
// 结合react-transition-group 实现路由切换动画
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './index.scss';

const RouterView = () => {
	const { pathname } = useLocation();
	const outlet = useOutlet();
	return (
		// SwitchTransition参考vue的out-in的模式实现的，控制组件进入和离开动画的加载顺序，避免只能同时加载
		// out-in: 旧的元素离开，插入新元素
		<div className="router-view">
			<SwitchTransition mode="out-in">
				{/* 注意：这里是classNames */}
				<CSSTransition
					key={pathname}
					timeout={{
						// 进入的时间
						enter: 300,
						// 离开的时间
						exit: 300
					}}
					// 默认情况下，子组件在达到“退出”状态后仍然挂载。
					// 如果你希望在组件退出后卸载组件，请设置unmountOnExit
					unmountOnExit
					// 如果组件挂载时显示组件，则该组件不进行转换。
					appear={false}
					// 在组件出现、进入、退出或完成过渡时应用于组件的动画类名前缀
					// 注意这里的className有加s
					classNames="page"
				>
					{/* 此处不能直接用 <Outlet /> 会造成首次路由切换时，组件渲染没有动画过渡 */}
					{/* 应该用useOutlet()钩子 */}
					{outlet}
				</CSSTransition>
			</SwitchTransition>
		</div>
	);
};

export default RouterView;
