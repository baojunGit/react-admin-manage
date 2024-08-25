import { ReactSVG } from 'react-svg';
import { useState } from 'react';

interface SvgIconProps {
	src: string;
	width?: string;
	height?: string;
	color?: string;
	wrapStyle?: React.CSSProperties; // 包裹内容盒子的样式
	hoverStyle?: React.CSSProperties; // 悬停时的样式对象
}

const SvgIcon: React.FC<SvgIconProps> = ({
	src,
	width = '16px',
	height = '16px',
	color = 'auto',
	wrapStyle = {},
	hoverStyle = {} // 默认为空对象
}) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="svg-icon-wrapper" style={wrapStyle}>
			<ReactSVG
				src={src}
				className="svg-icon"
				beforeInjection={svg => {
					svg.setAttribute('width', width); // 设置 SVG 宽度
					svg.setAttribute('height', height); // 设置 SVG 高度
					svg.setAttribute('fill', color); // 设置 SVG 填充颜色
				}}
				onMouseEnter={() => setIsHovered(true)} // 鼠标进入时设置悬停状态为 true
				onMouseLeave={() => setIsHovered(false)} // 鼠标离开时设置悬停状态为 false
				style={isHovered ? hoverStyle : undefined} // 根据悬停状态应用样式
			/>
			{/* 使用伪类设置悬停时的颜色 */}
			<style>
				{`
          .svg-icon-wrapper:hover .svg-icon svg {
            fill: ${hoverStyle?.color};
          }
          .svg-icon div {
            display: flex
          }
        `}
			</style>
		</div>
	);
};

export default SvgIcon;
