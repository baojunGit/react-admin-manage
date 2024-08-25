import { Tabs } from 'antd';
import bgUrl from '@/assets/images/logo.jpg';
import styles from './index.module.scss';
import { LoginAccount, LoginPhone } from './components';
const { TabPane } = Tabs;

const Login = () => {
	return (
		<div className={styles.login}>
			<div className={styles['login-container']}>
				<header className={styles['login-header']}>
					<div className={styles['header-logo']}>
						<img className={styles['logo']} src={bgUrl} alt="logo图片" />
						<span className={styles['title']}>BaoJun</span>
					</div>
					<div className={styles['header-desc']}>
						这是一个程序员的试验田，喜欢给个star～～
					</div>
				</header>
				<main className={styles['login-main']}>
					<div className={styles['info']}>
						<Tabs defaultActiveKey="1" centered tabBarGutter={120}>
							<TabPane key="1" tab="账号密码登陆">
								<LoginAccount />
							</TabPane>
							<TabPane key="2" tab="手机号登陆">
								<LoginPhone />
							</TabPane>
						</Tabs>
					</div>
				</main>
				<footer className={styles['login-footer']}>闽ICP备19000630号-1</footer>
			</div>
		</div>
	);
};

export default Login;
