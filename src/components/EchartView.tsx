import React, {
	useEffect,
	useRef,
	forwardRef,
	useImperativeHandle
} from 'react';
import * as echarts from 'echarts';

interface PropsType {
	// 图表宽度
	width: string;
	// 图表高度
	height: string;
	// 图表数据项，不知道具体对象类型，用any
	options: any;
}

const EchartView = (props: PropsType, ref: any) => {
	const { width, height, options } = props;
	const echartRef = useRef<HTMLDivElement>(null);
	let myChart: echarts.EChartsType;
	// echart实例化
	useEffect(() => {
		myChart = echarts.init(echartRef.current);
		if (options) {
			myChart.setOption(options);
		}
		return () => {
			myChart && myChart.dispose();
		};
	}, []);
	const clickChart = func => {
		// 加上getZr()，监听用户的点击区域，包括空白位置
		myChart.getZr().on('click', () => {
			func();
		});
	};
	// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例属性。
	useImperativeHandle(ref, () => ({
		// 这里不传myChart, 传给父组件也只是undefined，无法拿到echarts实例，用useRef也是一样
		// 暴露一个点击方法给父组件，可以传入一个回调函数执行
		click: func => {
			clickChart(func);
		}
	}));
	return (
		<div
			ref={echartRef}
			style={{ width: `${width}`, height: `${height}` }}
		></div>
	);
};

// 使用 useImperativeHandle + forwardRef 向上暴露组件实例属性和方法
// 1.将ref传递到子组件中
// 2.需要使用forwardRef对子组件进行包装

// forwardRef是父传子，useImperativeHandle 是子传父
export default forwardRef(EchartView);
