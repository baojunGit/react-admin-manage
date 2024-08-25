import PulseLoader from 'react-spinners/PulseLoader';

// 加载中效果组件
const FallbackLoading = () => {
	return (
		<div
			style={{
				position: 'fixed',
				left: 0,
				top: 0,
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<PulseLoader
				color="#406eeb"
				size={20}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default FallbackLoading;
