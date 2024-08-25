import { useEffect, useRef } from 'react';
import { Card } from 'antd';
import ViewHeader from '@/components/ViewHeader';
import EchartView from '@/components/EchartView';
import styles from './index.module.scss';

const View2 = () => {
	const viewData = {
		visualizationMode: 'pie-two',
		title: '报工投入占比',
		description: ``,
		subDesc: '',
		label: '资源管理',
		isNew: false,
		pieData1: {
			title: '开发类项目工作量占比',
			name: '',
			value: 93.4,
			suffix: '%',
			aggre: null
		},
		pieData2: {
			title: '编码自测工作量占比',
			name: '',
			value: 56.1,
			suffix: '%',
			aggre: null
		},
		url1: 'https://www.baidu.com/',
		url2: 'https://juejin.cn/',
		period: '统计周期：2022-07-19至2022-08-18'
	};
	const { pieData1, pieData2, url1, url2 } = viewData;

	const getOptions = pieData => {
		const { title, value, suffix } = pieData;
		const options = {
			title: [
				{
					text: title,
					textStyle: {
						color: '#7c7c7c',
						fontSize: '14px',
						fontWeight: '400',
						fontFamily: 'FZZhongDengXian-Z07S'
					},
					left: 'center',
					top: '10%'
				},
				{
					text: `{a|${value}}{b|${suffix}}`,
					left: 'center',
					top: '46%',
					textStyle: {
						rich: {
							a: {
								fontSize: 24,
								color: '#595959',
								fontWeight: '500'
							},
							b: {
								fontSize: 14,
								color: '#595959',
								padding: [4, 0, 0, 0]
							}
						}
					}
				}
			],
			color: ['#2f5597', '#efefef'],
			series: [
				{
					name: 'ring option',
					top: '10%',
					type: 'pie',
					radius: ['50%', '58%'],
					labelLine: {
						show: false
					},
					// 禁止选中圆环放大的效果
					emphasis: {
						disabled: true
					},
					data: [
						{
							value: value
						},
						{
							value: 100 - value
						}
					]
				}
			]
		};
		return options;
	};

	const options1 = getOptions(pieData1);

	const options2 = getOptions(pieData2);

	const chart1 = useRef(null);
	const chart2 = useRef(null);

	const clickFunc1 = () => {
		window.open(url1);
	};

	const clickFunc2 = () => {
		window.open(url2);
	};

	useEffect(() => {
		chart1.current.click(clickFunc1);
		chart2.current.click(clickFunc2);
	}, []);

	return (
		<Card title="饼状复合指标" style={{ width: '100%', marginBottom: '20px' }}>
			<div className={styles['view1']}>
				<ViewHeader viewData={viewData} />
				<main>
					<EchartView
						ref={chart1}
						options={options1}
						width="200px"
						height="200px"
					/>
					<EchartView
						ref={chart2}
						options={options2}
						width="200px"
						height="200px"
					/>
				</main>
			</div>
		</Card>
	);
};

export default View2;
