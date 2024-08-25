import ReactDOM from 'react-dom/client';
// 引入全局阿里图标库
import '@/assets/fonts/iconfont.css';
// mock一定要置于最前面
import '@/mock';
// 引入初始化样式
import './styles/index.scss';
import Locales from './locales';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Locales>
		<App />
	</Locales>
);
