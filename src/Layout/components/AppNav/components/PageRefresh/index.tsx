import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';

const PageRefresh = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const onFresh = () => {
		const { pathname, search } = location;
		// 构建新的重定向路径
		const redirectPath = `/redirect${pathname}`;
		// 执行重定向
		navigate(`${redirectPath}${search}`, { replace: true });
	};
	return (
		<div className="page-refresh" onClick={onFresh}>
			<i className="iconfont icon-shuaxin2 rotate"></i>
		</div>
	);
};

export default PageRefresh;
