import { Dropdown, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTabStore } from '@/store';
import styles from './index.module.scss';

const MoreButton = () => {
	const { pathname } = useLocation();
	const {
		delAllVisitedTabs,
		delLeftVisitedTabs,
		delOthersVisitedTabs,
		delRightVisitedTabs
	} = useTabStore();
	const navigate = useNavigate();
	const dropdownRender = () => (
		<Menu
			items={[
				{
					key: '1',
					label: (
						<div
							className="tabs-select-item"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '12px'
							}}
						>
							<i className="iconfont icon-guanbi"></i>
							<span>关闭其他</span>
						</div>
					),
					onClick: () => delOthersVisitedTabs(pathname)
				},
				{
					key: '2',
					label: (
						<div
							className="tabs-select-item"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '12px'
							}}
						>
							<i className="iconfont icon-jiantou_xiangzuo"></i>
							<span>关闭左侧</span>
						</div>
					),
					onClick: () => delLeftVisitedTabs(pathname)
				},
				{
					key: '3',
					label: (
						<div
							className="tabs-select-item"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '12px'
							}}
						>
							<i className="iconfont icon-jiantou_xiangyou"></i>
							<span>关闭右侧</span>
						</div>
					),
					onClick: () => delRightVisitedTabs(pathname)
				},
				{
					key: '4',
					label: (
						<div
							className="tabs-select-item"
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								fontSize: '12px'
							}}
						>
							<i className="iconfont icon-guanbi"></i>
							<span>关闭全部</span>
						</div>
					),
					onClick: () => {
						delAllVisitedTabs();
						navigate('/home');
					}
				}
			]}
		/>
	);

	return (
		<Dropdown
			dropdownRender={() => dropdownRender()}
			arrow={{ pointAtCenter: true }}
			placement="bottomRight"
		>
			{/* 下拉图标 */}
			<span className={styles['tabs-more']}>
				<span className={styles['tabs-more-icon']}>
					<i className={`${styles['box']} ${styles['box-t']}`}></i>
					<i className={`${styles['box']} ${styles['box-b']}`}></i>
				</span>
			</span>
		</Dropdown>
	);
};

export default MoreButton;
