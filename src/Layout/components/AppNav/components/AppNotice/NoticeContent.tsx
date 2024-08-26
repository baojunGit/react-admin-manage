import React, { useState } from 'react';
import styles from './NoticeContent.module.scss';
import { Tabs, Avatar, Tooltip, Tag, Button } from 'antd';

interface NoticeItem {
	avatar: string;
	title: string;
	datetime: string;
	description: string;
	extra?: string;
	status?: string;
	type: string;
}

interface TabItem {
	key: string;
	name: string;
	noticeList: Array<NoticeItem>;
}

interface PropsType {
	data: Array<TabItem>;
}

const NoticeContent: React.FC<PropsType> = ({ data: tabsList }) => {
	const [toolTipContent, setToolTipContent] = useState('');

	const hasTipContent = (e, content) => {
		const parentHeight = e.currentTarget?.offsetHeight;
		const childHeight = e.currentTarget?.children[0]?.offsetHeight;
		if (childHeight > parentHeight) {
			setToolTipContent(content);
			return;
		}
		setToolTipContent(null);
	};

	// 使用 items 属性代替 TabPane，并添加自定义类名
	const tabItems = tabsList.map(({ key = '', name = '', noticeList = [] }) => ({
		key,
		label: `${name} (${noticeList.length})`,
		children: (
			<div className={styles['tab-pane']}>
				<ul className={styles['notice-wrap']}>
					{noticeList.map((i, index) => (
						<li className={styles['notice-item']} key={index}>
							{i?.avatar && (
								<Avatar
									className={styles['item-avatar']}
									size={30}
									src={i.avatar}
								/>
							)}
							<div className={styles['item-text']}>
								<div className={styles['text-title']}>
									<Tooltip title={toolTipContent}>
										<div
											onMouseEnter={e => hasTipContent(e, i?.title)}
											className={styles['title-content']}
										>
											<span>{i?.title}</span>
										</div>
									</Tooltip>
									{i?.extra && <Tag color={i?.status}>{i.extra}</Tag>}
								</div>
								{i?.description && (
									<Tooltip title={toolTipContent}>
										<div
											onMouseEnter={e => hasTipContent(e, i?.description)}
											className={styles['text-description']}
										>
											<span>{i?.description}</span>
										</div>
									</Tooltip>
								)}
								{i?.datetime && (
									<div className={styles['text-dateime']}>{i?.datetime}</div>
								)}
							</div>
						</li>
					))}
				</ul>
			</div>
		)
	}));

	return (
		<div className={styles['notice-content']}>
			<Tabs
				centered
				tabBarStyle={{ margin: 0 }}
				tabBarGutter={60}
				defaultActiveKey="1"
				items={tabItems}
			/>
			<div className={styles['notice-clear']}>
				<Button type="text">
					<div className={styles['text-wrap']}>
						<i className="iconfont icon-anniu_guanbi"></i>
						<span>清空消息</span>
					</div>
				</Button>
			</div>
		</div>
	);
};

export default NoticeContent;
