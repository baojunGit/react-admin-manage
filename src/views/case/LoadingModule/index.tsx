import AppLoading from '@/components/AppLoading';

const LoadingModule = () => {
	const loadList = [
		{
			name: 'BarLoader',
			color: '#409eff'
		},
		{
			name: 'BeatLoader',
			color: '#409eff'
		},
		{
			name: 'BounceLoader',
			color: '#409eff'
		},
		{
			name: 'CircleLoader',
			color: '#409eff'
		},
		{
			name: 'ClimbingBoxLoader',
			color: '#409eff'
		},
		{
			name: 'ClipLoader',
			color: '#409eff'
		},
		{
			name: 'ClockLoader',
			color: '#409eff'
		},
		{
			name: 'DotLoader',
			color: '#409eff'
		},
		{
			name: 'FadeLoader',
			color: '#409eff'
		},
		{
			name: 'GridLoader',
			color: '#409eff'
		},
		{
			name: 'HashLoader',
			color: '#409eff'
		},
		{
			name: 'MoonLoader',
			color: '#409eff'
		},
		{
			name: 'PacmanLoader',
			color: '#409eff'
		},
		{
			name: 'PropagateLoader',
			color: '#409eff'
		},
		{
			name: 'PuffLoader',
			color: '#409eff'
		},
		{
			name: 'PulseLoader',
			color: '#409eff'
		},
		{
			name: 'RingLoader',
			color: '#409eff'
		},
		{
			name: 'RiseLoader',
			color: '#409eff'
		},
		{
			name: 'RotateLoader',
			color: '#409eff'
		},
		{
			name: 'ScaleLoader',
			color: '#409eff'
		},
		{
			name: 'SkewLoader',
			color: '#409eff'
		},
		{
			name: 'SquareLoader',
			color: '#409eff'
		},
		{
			name: 'SyncLoader',
			color: '#409eff'
		}
	];
	return (
		<div
			id="loading-module-container"
			style={{
				background: '#f2f3f5',
				padding: 0,
				display: 'flex',
				columnGap: '20px',
				rowGap: '20px',
				paddingBottom: '20px',
				flexWrap: 'wrap'
			}}
		>
			{loadList.map(({ name, color }, index) => (
				<div
					key={index}
					style={{
						height: '200px',
						width: '200px',
						background: '#fff'
					}}
				>
					<AppLoading name={name} color={color} />
				</div>
			))}
		</div>
	);
};

export default LoadingModule;
