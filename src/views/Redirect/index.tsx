import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Redirect = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const { pathname, search } = location;
		// 移除路径中的 /redirect 部分
		const targetPath = pathname.replace(/^\/redirect/, '');

		// 如果 targetPath 为空，默认重定向到首页或其他指定路径
		const finalPath = targetPath.length > 0 ? targetPath : '/';

		// 使用 navigate 进行重定向
		navigate(`${finalPath}${search}`, { replace: true });
	}, [location]);
	// 设置id样式，避免页面底部内容往上显示闪烁
	return <div id="redirect-container"></div>;
};

export default Redirect;
