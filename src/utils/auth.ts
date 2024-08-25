import Cookies from 'js-cookie';
// routeInstance.navigate会有跳转卡死的问题
// import routeInstance from '@/router';
import { clearAllLocal, clearAllSession } from './storage';

// token失效退出登录，需要重定向
export const requestSignUp = () => {
	clearAllSession();
	clearAllLocal();
	Cookies.remove('token');
	// location.reload();
	const urlParams = new URLSearchParams(window.location.search);
	const redirectParam = urlParams.get('redirect');
	// 如果 URL 中没有 redirect 参数，就把退出登录前的地址记住
	if (!redirectParam) {
		// 401不要错误提示
		const currentPath = encodeURIComponent(window.location.href);
		// message.error(errorInfo?.message);
		// clearExceptLocal('umi_locale');
		// routeInstance.navigate(`/portal/home?redirect=${currentPath}`);
		window.location.href = `/portal/home?redirect=${currentPath}`;
	}
};

// 用户自己退出登录
export const signUp = () => {
	clearAllSession();
	clearAllLocal();
	Cookies.remove('token');
	// routeInstance.navigate('/portal/home');
	window.location.href = '/portal/home';
};
