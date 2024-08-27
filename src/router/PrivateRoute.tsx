/* 全局的路由守卫 */
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

const PrivateRoute: React.FC<{ element: ReactElement }> = ({ element }) => {
	// 检查用户是否已登录
	const isAuthenticated = !!Cookies.get('token');
	// 一真为真
	return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
