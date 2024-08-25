import { useEffect, useRef } from 'react';
import { Card, Tooltip } from 'antd';
import ViewHeader from '@/components/ViewHeader';
import EchartView from '@/components/EchartView';
import styles from './index.module.scss';

// func是点击echarts后执行的回调函数
interface Tchart {
	click: (func) => void;
}

const View1 = () => {
	const viewData = {
		visualizationMode: 'bar-two',
		title: '首次实施天数',
		description: `<b style="color:#15aeff;font-size:14px;">首次实施天数</b><br>
      指标业务价值：首次实施天数反映从第1次ST结束时间到第1次上线完成的时长，通过关注首次实施天数及达标率，缩短上线环节的周期，加快项目整体交付速度。<br>
      <span style="color:#ed7d31;font-weight: bold;">预警规则：</span><br>
      <span style="color:#ed7d31;">大项目和中项目首次实施天数在15天内的占比<70%</span><br>
      <span style="color:#ed7d31;">小项目首次实施天数在15天内的占比<65%</span><br>`,
		subDesc: `<b style="color:#15aeff;font-size:14px;">首次实施监控</b><br><span style="color:#f56c6c">超期：距离第1次ST流程结束超过15天</span><br><span style="color:#f28e2b">预警：距离第1次ST流程结束在15天以内，且尚未完成上线</span>`,
		label: '交付速度',
		isNew: false,
		data: [
			{ name: '预警', value: 16, suffix: '个', aggre: null },
			{ name: '超期', value: 0, suffix: '个', aggre: null }
		],
		barData1: [
			{
				title: '首次实施达标率',
				name: '大',
				value: 100,
				suffix: '%',
				aggre: null
			},
			{
				title: '首次实施达标率',
				name: '中',
				value: 99.2,
				suffix: '%',
				aggre: null
			},
			{
				title: '首次实施达标率',
				name: '小',
				value: 98.7,
				suffix: '%',
				aggre: null
			}
		],
		barData2: [
			{
				title: '首次实施天数',
				name: '大',
				value: 3,
				suffix: '天',
				aggre: null
			},
			{
				title: '首次实施天数',
				name: '中',
				value: 5,
				suffix: '天',
				aggre: null
			},
			{
				title: '首次实施天数',
				name: '小',
				value: 6,
				suffix: '天',
				aggre: null
			}
		],
		statistic: [
			{
				name: '预警',
				value: 222,
				suffix: '个',
				aggre: null
			},
			{
				name: '超期',
				value: 27,
				suffix: '个',
				aggre: null
			}
		],
		url1: 'https://www.baidu.com/',
		url2: 'https://juejin.cn/',
		period: '统计周期：2022-07-19至2022-08-18'
	};
	const { subDesc, barData1, barData2, statistic, url1, url2 } = viewData;

	const getOptions = barData => {
		const title = barData[0]?.title;
		const suffix = barData[0]?.suffix;
		let labels = [];
		let values = [];
		for (let { name, value } of barData) {
			labels.push(name);
			values.push(value);
		}
		const options = {
			title: {
				text: title,
				textStyle: {
					color: '#7c7c7c',
					fontSize: '14px',
					fontWeight: '400',
					letterSpacing: '1.5px',
					fontFamily: 'FZZhongDengXian-Z07S'
				},
				left: '5.5%'
			},
			xAxis: {
				show: false,
				type: 'value'
			},
			yAxis: [
				{
					type: 'category',
					inverse: true,
					axisLabel: {
						show: true,
						margin: 10,
						color: '#7c7c7c',
						fontSize: '14',
						fontFamily: 'FZZhongDengXian-Z07S'
					},
					splitLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: '#c0c0c0'
						}
					},
					data: labels
				},
				{
					type: 'category',
					inverse: true,
					axisTick: 'none',
					axisLine: 'none',
					show: true,
					axisLabel: {
						color: '#595959',
						fontSize: '14',
						fontFamily: 'Bebas',
						formatter: function (value) {
							return `${value}${suffix}`;
						}
					},
					data: values
				}
			],
			series: [
				{
					name: title,
					type: 'bar',
					zlevel: 1,
					itemStyle: {
						color: '#2f5597'
					},
					barWidth: 8,
					data: values
				}
			],
			grid: {
				left: '8%',
				right: '8%',
				bottom: '-10',
				top: '22%',
				containLabel: true
			}
		};
		return options;
	};

	const getColor = name => {
		let color = '';
		switch (name) {
			case '超期':
				color = '#f56767';
				break;
			case '预警':
				color = '#e6a23c';
				break;
			default:
				color = 'black';
		}
		return color;
	};

	const clickFunc1 = () => {
		window.open(url1);
	};

	const clickFunc2 = () => {
		window.open(url2);
	};

	const chart1 = useRef<Tchart>(null);
	const chart2 = useRef<Tchart>(null);
	useEffect(() => {
		chart1.current.click(clickFunc1);
		chart2.current.click(clickFunc2);
	}, []);

	return (
		<Card title="柱状复合指标" style={{ width: '100%', marginBottom: '20px' }}>
			<div className={styles['view1']}>
				<ViewHeader viewData={viewData} />
				<main>
					<EchartView
						ref={chart1}
						options={getOptions(barData1)}
						width="200px"
						height="110px"
					/>
					<EchartView
						ref={chart2}
						options={getOptions(barData2)}
						width="200px"
						height="110px"
					/>
				</main>
				<footer>
					<div className={styles['subTitle']}>
						实施中监控
						<Tooltip
							title={<div dangerouslySetInnerHTML={{ __html: subDesc }}></div>}
							placement="rightTop"
						>
							<i className="iconfont icon-wenhao"></i>
						</Tooltip>
					</div>
					<div className={styles['statistic']}>
						{statistic.map(({ name, value, suffix }, index) => (
							<div className={styles['statistic-item']} key={index}>
								<div className="statistic-title">{name}</div>
								<div className="statistic-content">
									<span
										className={styles['content-value']}
										style={{ color: `${getColor(name)}` }}
									>
										{value}
									</span>
									<span className="content-suffix">{suffix}</span>
								</div>
							</div>
						))}
					</div>
				</footer>
			</div>
		</Card>
	);
};

export default View1;
