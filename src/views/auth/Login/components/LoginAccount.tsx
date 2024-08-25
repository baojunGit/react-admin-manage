import { useEffect, useRef, useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { getCode, signIn } from '@/api/login';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// 规范：文件中的类型定义，应使用PascalCase拼写法命名，并写在组件实现的前面
interface LoginParams {
	username: string;
	password: string;
	verifyCode: string;
	captchaId: string;
	remember: boolean;
}

// 在组件外部(但不在组件范围内，防止被重新初始化)初始化变量
// react文档建议使用useRef来保持任意的可变值
// let captchaId: string;

const LoginAccount = () => {
	// 通过 Form.useForm 对表单数据域进行交互
	const [form] = Form.useForm();

	const captchaId = useRef('');

	const [loading, setLoading] = useState<boolean>(false);

	const [imgUrl, setImgUrl] = useState<string>('');

	const navigate = useNavigate();

	const fetchVerify = async () => {
		let {
			data: { id, img }
		} = await getCode();
		captchaId.current = id;
		setImgUrl(img);
	};

	useEffect(() => {
		fetchVerify();
	}, []);

	const onFinish = async (loginForm: LoginParams) => {
		try {
			setLoading(true);
			loginForm.captchaId = captchaId.current;
			const {
				data: { token }
			} = await signIn(loginForm);
			Cookies.set('token', token);
			// 组件卸载了，但是状态值（如：setState，useState）依然更改了，或者处于渲染中，
			// 直接卸载组件，可能会导致内存泄漏
			// 这里用定时器，解决finally还没执行渲染完毕就跳转，导致内存泄漏
			const href = Cookies.get('redirectUrl');
			setTimeout(() => {
				if (!href) {
					navigate('/home');
					return;
				}
				window.location.href = href;
			}, 300);
			// 重定向链接使用后就清除，再次登陆进来默认跳转首页
			Cookies.remove('redirectUrl');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 0 }}
			wrapperCol={{ span: 24 }}
			form={form}
			initialValues={{ remember: true }}
			autoComplete="off"
			style={{ width: '350px' }}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[{ required: true, message: '请输入账号!' }]}
			>
				<Input size="large" placeholder="账号" />
			</Form.Item>

			<Form.Item
				name="password"
				rules={[{ required: true, message: '请输入密码!' }]}
			>
				<Input.Password size="large" placeholder="密码" />
			</Form.Item>
			<Form.Item
				name="verifyCode"
				rules={[{ required: true, message: '请输入验证码！' }]}
			>
				<Row>
					<Col span={15}>
						<Input size="large" placeholder="请输入验证码" />
					</Col>
					<Col span={7} offset={2}>
						{imgUrl ? (
							<img src={imgUrl} onClick={fetchVerify} alt="图片验证码" />
						) : (
							<img
								src="@/assets/images/checkcode.png"
								onClick={fetchVerify}
								alt="找不到验证码"
							/>
						)}
					</Col>
				</Row>
			</Form.Item>

			<Form.Item>
				<Row>
					<Col span={18}>
						<Form.Item name="remember" valuePropName="checked">
							<Checkbox>自动登录</Checkbox>
						</Form.Item>
					</Col>
					<Col span={6}>
						<Form.Item>
							<Button type="link">忘记密码?</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form.Item>

			<Form.Item>
				<Button
					size="large"
					style={{ width: '100%' }}
					type="primary"
					htmlType="submit"
					loading={loading}
				>
					登陆
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginAccount;
