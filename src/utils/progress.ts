/**
 * nprogress库配置，工具类和第三方库配置文件一般放在utils目录下
 * @param
 * @returns
 */

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 500, // 递增进度条的速度
	showSpinner: false, // 是否显示加载ico
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3 // 初始化时的最小百分比
});

export default NProgress;
