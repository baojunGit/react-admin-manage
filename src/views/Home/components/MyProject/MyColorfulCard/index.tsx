import { Card } from 'antd';
import { ReactElement } from 'react';
import styles from './index.module.scss';

interface Props {
	shadow?: string;
	colorFrom: string;
	colorTo: string;
	height: string;
	title: string;
	icon?: string;
	onClick?: () => void;
	children: ReactElement;
}

const MyColorfulCard: React.FC<Props> = ({
	shadow = '',
	colorFrom,
	colorTo,
	height,
	title,
	icon,
	onClick,
	children
}) => {
	return (
		<Card
			className={styles['my-colorful-card']}
			style={{
				background: `linear-gradient(50deg, ${colorFrom}, ${colorTo})`,
				height: height
			}}
			// 鼠标移过时可浮起
			hoverable={shadow === 'hover'}
			onClick={onClick}
		>
			<div className={styles.header}>{title}</div>
			{icon && <i className={`${icon} ${styles.icon}`} />}
			{children}
		</Card>
	);
};

export default MyColorfulCard;
