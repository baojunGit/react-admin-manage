/**
 * axios请求配置文件
 * @param
 * @returns
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';
import { API_PREFIX } from '@/config/envConfig';
// import NProgress from '@/utils/progress';
import { CODE } from '@/config/constants';
import { requestSignUp } from './auth';
// import { getLocal } from './storage';

// const TOKEN_INVSSLID: string = 'Token认证失败，请重新登录'
// const NETWORE_ERROR: string = '网络请求异常，请稍后重试'

/* 创建axios实例 */
const service: AxiosInstance = axios.create({
	baseURL: API_PREFIX, // 接口前缀
	timeout: 8000, // 请求超过时间
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
});

/* axios请求拦截器 */
service.interceptors.request.use(
	config => {
		// NProgress.start(); // 每次请求时，调用进度条
		// 请求头属性首字母浏览器会自动转成大写
		// let language = getLocal('language')?.state?.language;
		// switch (language) {
		// 	case 'zh_CN':
		// 		language = 'zh-CN';
		// 		break;
		// 	case 'en_US':
		// 		language = 'en-US';
		// 		break;
		// }
		config.headers['Aorta-Token'] = Cookies.get('token') || '';
		config.headers['Accept-Language'] = 'zh-CN'; // 默认中文
		config.headers['currencyCode'] = 'CNY'; // 币种是人民币，USD是美元
		return config;
	},
	(error: any) => {
		console.error('error', error);
		return Promise.reject(error);
	}
);

// 定义不需要错误提示的接口地址列表
const excludedErrorUrls = [
	'/api/user/client/shuangmaSend',
	'/api/oauth/oauth/token',
	'/api/user/userSms/client/registerMobile',
	'/api/user/client/editPwd'
	// 添加其他接口地址
];

/* axios响应拦截器 */
service.interceptors.response.use(
	(response: AxiosResponse) => {
		// NProgress.done(); // 请求有响应的时候
		// 拦截响应，做统一处理
		const res = response.data;
		if (res?.code === CODE) {
			return res;
		}

		// 需要错误提示的请求
		if (!excludedErrorUrls.includes(response?.config?.url)) {
			// 检查请求地址是否在排除列表中
			message.error(res?.message);
			return res;
		}

		// 不需要错误提示的请求
		return res;
	},
	(error: any) => {
		// console.log('错误', error);
		// 401登录超时，token过期
		if (error?.response?.status === 401) {
			requestSignUp();
		}
		// 统一处理错误提示
		// ElMessage({
		//   message: error,
		//   type: 'error',
		//   duration: 2 * 1000
		// })
		return Promise.reject(error);
	}
);

export default service;
