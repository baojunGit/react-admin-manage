import React, { CSSProperties } from 'react';
// 加载动画，这个库里有很多实用效果，直接引入组件使用
// 官网：https://www.davidhu.io/react-spinners/storybook
import BarLoader from 'react-spinners/BarLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import CircleLoader from 'react-spinners/CircleLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import DotLoader from 'react-spinners/DotLoader';
import FadeLoader from 'react-spinners/FadeLoader';
import GridLoader from 'react-spinners/GridLoader';
import HashLoader from 'react-spinners/HashLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PuffLoader from 'react-spinners/PuffLoader';
import PulseLoader from 'react-spinners/PulseLoader';
import RingLoader from 'react-spinners/RingLoader';
import RiseLoader from 'react-spinners/RiseLoader';
import RotateLoader from 'react-spinners/RotateLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SkewLoader from 'react-spinners/SkewLoader';
import SquareLoader from 'react-spinners/SquareLoader';
import SyncLoader from 'react-spinners/SyncLoader';

interface PropType {
	color?: string;
	name?: string;
	size?: number;
}
const AppLoading: React.FC<PropType> = ({
	color = '#409eff',
	name = 'PacmanLoader',
	size = '25px'
}) => {
	const override: CSSProperties = {
		display: 'block'
	};
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{name === 'BarLoader' && (
				<BarLoader color={color} loading={true} cssOverride={override} />
			)}
			{name === 'BeatLoader' && (
				<BeatLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'BounceLoader' && (
				<BounceLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'CircleLoader' && (
				<CircleLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'ClimbingBoxLoader' && (
				<ClimbingBoxLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'ClipLoader' && (
				<ClipLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'ClockLoader' && (
				<ClockLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'DotLoader' && (
				<DotLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'FadeLoader' && (
				<FadeLoader color={color} loading={true} cssOverride={override} />
			)}
			{name === 'GridLoader' && (
				<GridLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'HashLoader' && (
				<HashLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'MoonLoader' && (
				<MoonLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'PacmanLoader' && (
				<PacmanLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'PropagateLoader' && (
				<PropagateLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'PuffLoader' && (
				<PuffLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'PulseLoader' && (
				<PulseLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'RingLoader' && (
				<RingLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'RiseLoader' && (
				<RiseLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'RotateLoader' && (
				<RotateLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'ScaleLoader' && (
				<ScaleLoader color={color} loading={true} cssOverride={override} />
			)}
			{name === 'SkewLoader' && (
				<SkewLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'SquareLoader' && (
				<SquareLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
			{name === 'SyncLoader' && (
				<SyncLoader
					color={color}
					loading={true}
					cssOverride={override}
					size={size}
				/>
			)}
		</div>
	);
};

export default AppLoading;
