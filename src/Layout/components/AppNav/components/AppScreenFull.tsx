import { useFullscreen } from 'ahooks';

const AppScreenFull = () => {
	const [isFullscreen, { toggleFullscreen }] = useFullscreen(() =>
		document.getElementById('root')
	);
	return (
		<div className="app-screenfull">
			<i
				onClick={toggleFullscreen}
				className={[
					'iconfont',
					isFullscreen ? 'icon-quanping6-xianxing' : 'icon-quanping5-xianxing'
				].join(' ')}
			></i>
		</div>
	);
};

export default AppScreenFull;
