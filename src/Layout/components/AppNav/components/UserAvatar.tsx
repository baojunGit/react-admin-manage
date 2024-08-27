import { Menu, Dropdown, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { faceGif } from '@/config/getImg';
import { clearAllLocal, clearAllSession } from '@/utils/storage';

const UserAvatar = () => {
	const logout = () => {
		Modal.confirm({
			title: '温馨提示 🧡',
			icon: <ExclamationCircleOutlined />,
			content: '是否确认退出登录？',
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				// successMessage('退出登录成功！');
				clearAllLocal();
				clearAllSession();
				Cookies.remove('token');
				location.reload();
			}
		});
	};
	const handleMenu = ({ key }) => {
		switch (key) {
			case '0':
				break;
			case '1':
				logout();
				break;
		}
	};

	const dropdownRender = () => (
		<Menu
			onClick={handleMenu}
			items={[
				{
					label: (
						<div>
							<i className="iconfont icon-wode1-xianxing"></i>{' '}
							<span>个人中心</span>
						</div>
					),
					key: '0'
				},
				{
					label: (
						<div>
							<i className="iconfont icon-guanji"></i> <span>退出登录</span>
						</div>
					),
					key: '1'
				}
			]}
		/>
	);

	return (
		<div className="user-avatar">
			<Dropdown
				dropdownRender={() => dropdownRender()}
				trigger={['click']}
				placement="bottomRight"
				arrow
			>
				<div className="avatar-wrap">
					<img
						width="30px"
						height="30px"
						alt="头像"
						className="avatar"
						src={faceGif}
					/>
					<div className="name">
						<span className="name-title"> 游客 </span>
						<i className="user-name-dropdown iconfont icon-xiangxia2"></i>
					</div>
				</div>
			</Dropdown>
		</div>
	);
};

export default UserAvatar;
