import { Card } from 'antd';
import styles from './index.module.scss';

const Hover1 = () => {
	const arr = [
		{
			id: 1,
			isNew: 0,
			title: '首次实施天数',
			desc: '该接口按用户所在组织结构控制权限，返回所在组织结构的主办项目的首次实施天数信息。',
			icon: 'iconfont icon-app'
		},
		{
			id: 2,
			isNew: 1,
			title: '项目基本信息',
			desc: '来自VP的项目基础信息',
			icon: 'iconfont icon-app'
		}
	];
	// 在JavaScript中，通过document.getElementById(id).style.XXX可以获取到XXX的值，
	// 但意外的是这样做只能获取到行内样式,获取不了外部的样式，可以用getComputedStyle
	const toggleShow = e => {
		const target = e.currentTarget?.children[0]?.children[2];
		const attr = getComputedStyle(target, null)?.visibility;
		if (attr === 'hidden') {
			target.style.visibility = 'visible';
			return;
		}
		target.style.visibility = 'hidden';
	};
	return (
		<Card title="显示隐藏" style={{ width: '100%', marginBottom: '20px' }}>
			<div className={styles['hover1']}>
				{arr.map(({ title, desc, icon }, index) => (
					<div
						className={styles['item']}
						onMouseEnter={e => toggleShow(e)}
						onMouseLeave={e => toggleShow(e)}
						key={index}
					>
						<div className={styles['item-left']}>
							<p className="title">{title}</p>
							<p className={styles['desc']}>{desc}</p>
							<div className={styles['sop']}>
								<span className={styles['field-desc']}>字段说明</span>
								<span className="fetch-api">获取接口</span>
							</div>
						</div>
						<div className={styles['item-right']}>
							<i className={`${icon} ${styles['right-icon']}`}></i>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
};

export default Hover1;
