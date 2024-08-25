import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import FallbackLoading from './components/FallbackLoading';
import useRouterInstance from './router';

const App = () => {
	const routerInstance = useRouterInstance();

	if (!routerInstance) {
		return <FallbackLoading />;
	}

	return (
		// ErrorBoundary 组件会捕获错误并显示备用的错误内容，而不会影响其他正常工作的组，放在最顶部
		<ErrorBoundary>
			<div id="app">
				{/* <Suspense> 组件允许你在加载组件时显示一个自定义的加载中状态（fallback） */}
				{/* RouterProvider自带的fallbackElement属性效果较差 */}
				<Suspense fallback={<FallbackLoading />}>
					{/* 包裹 RouterProvider 以及它的子组件，使得路由信息可以在整个应用中被访问 */}
					<RouterProvider router={routerInstance}></RouterProvider>
				</Suspense>
			</div>
		</ErrorBoundary>
	);
};

export default App;
