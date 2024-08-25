import { useSearchParams } from 'react-router-dom';

const Wrap = () => {
	const [searchParams] = useSearchParams();
	const url = searchParams.get('url');
	// 父元素只设置了min-height，但并没有确定的高度，因此子元素无法根据父元素的高度进行计算，height:100%失效
	// 解决方案
	// 可以给父元素加绝对定位，然后子元素加相对定位，这样子元素的高度就会根据父元素的高度进行计算
	return (
		<div id="react-container" style={{ position: 'relative', padding: 0 }}>
			<iframe
				src={url}
				title="React文档"
				style={{ position: 'absolute' }}
				width="100%"
				height="100%"
			></iframe>
		</div>
	);
};

export default Wrap;
