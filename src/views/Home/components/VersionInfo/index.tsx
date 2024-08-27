import React from 'react';
import { Card, Tag, Popover } from 'antd';
import styles from './index.module.scss';
const { dependencies, devDependencies, updateTime } = __APP_INFO__;

const VersionInfo: React.FC = () => {
	return (
		<div className={styles['version-info']}>
			<Card
				title={
					<div className={styles['card-header']}>
						<div>
							<i className="iconfont icon-xinxi"></i> 信息
						</div>
						<Tag color="processing">部署时间：{updateTime}</Tag>
					</div>
				}
			>
				<table className={styles['table']}>
					<tbody>
						<tr>
							<td>当前版本</td>
							<td colSpan={3}>
								<Tag>1.1.2</Tag>
							</td>
						</tr>
						<tr>
							<td>react</td>
							<td>
								{dependencies['react']}
								<Popover
									content="已升级至最新版本"
									placement="top"
									trigger="hover"
								>
									<i className="iconfont icon-jiantou-xiangshang"></i>
								</Popover>
							</td>
							<td>react-dom</td>
							<td>{dependencies['react-dom']}</td>
						</tr>
						<tr>
							<td>zustand</td>
							<td>{dependencies['zustand']}</td>
							<td>react-router-dom</td>
							<td>{dependencies['react-router-dom']}</td>
						</tr>
						<tr>
							<td>react-intl</td>
							<td>{dependencies['react-intl']}</td>
							<td>antd</td>
							<td>
								{dependencies['antd']}
								<Popover
									content="已升级至最新版本"
									placement="top"
									trigger="hover"
								>
									<i className="iconfont icon-jiantou-xiangshang"></i>
								</Popover>
							</td>
						</tr>
						<tr>
							<td>eslint</td>
							<td>{devDependencies['eslint']}</td>
							<td>sass</td>
							<td>{devDependencies['sass']}</td>
						</tr>
					</tbody>
				</table>
			</Card>
		</div>
	);
};

export default VersionInfo;
