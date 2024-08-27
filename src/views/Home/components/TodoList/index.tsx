import { useState } from 'react';
import { Checkbox, Card, Table } from 'antd';
import styles from './index.module.scss';

interface TodoItem {
	id: number;
	description: string;
	status: boolean;
}

const initialData: TodoItem[] = [
	{ id: 1, description: '今天要修复10个bug', status: true },
	{ id: 2, description: '明天记得有迭代会', status: true },
	{ id: 3, description: '下周三有室内回顾会', status: false },
	{ id: 4, description: '快到年底了，记得备年货', status: false },
	{ id: 5, description: '明年的规划记得在近期完成', status: false }
];

const TodoList = () => {
	const [data, setData] = useState<TodoItem[]>(initialData);
	const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>(
		initialData.filter(item => item.status).map(item => item.id)
	);

	const handleCheckboxChange = (rowId: number) => {
		setData(prevData =>
			prevData.map(item =>
				item.id === rowId ? { ...item, status: !item.status } : item
			)
		);
		setSelectedRowKeys(prevKeys =>
			prevKeys.includes(rowId)
				? prevKeys.filter(key => key !== rowId)
				: [...prevKeys, rowId]
		);
	};

	const columns = [
		{
			title: '',
			dataIndex: 'checkbox',
			render: (_: any, record: TodoItem) => (
				<Checkbox
					checked={selectedRowKeys.includes(record.id)}
					onChange={() => handleCheckboxChange(record.id)}
				/>
			)
		},
		{
			title: '描述',
			dataIndex: 'description',
			render: (text: string, record: TodoItem) => (
				<div
					className={`${styles.operation} ${record.status ? styles.todoItemDel : ''}`}
				>
					{text}
				</div>
			)
		},
		{
			title: '操作',
			render: () => (
				<div className={styles.operation}>
					<i className="iconfont icon-bianji"></i>
					<i className="iconfont icon-lajitong"></i>
				</div>
			)
		}
	];

	return (
		<div className={styles['todo-list']}>
			<Card
				title={
					<div className={styles['card-header']}>
						<div className={styles['header-title']}>
							<i
								className="iconfont icon-daiban"
								style={{ marginRight: '6px' }}
							></i>
							待办事项
						</div>
						<div className={styles['header-set']}>
							<span>添加</span>
							<span>保存</span>
						</div>
					</div>
				}
			>
				<Table
					columns={columns}
					dataSource={data}
					pagination={false}
					rowKey="id"
					showHeader={false}
					scroll={{ y: 140 }}
				/>
			</Card>
		</div>
	);
};

export default TodoList;
