import { FormInstance } from 'antd';

export interface LoginFormProps {
	form: FormInstance;
	loading: boolean;
	errorInfo: string;
	setErrorInfo: (string) => void;
	email?: string;
	setEmail?: (string) => void;
	telAreaCode?: string;
	setTelAreaCode?: (string) => void;
	mobile?: string;
	setMobile?: (string) => void;
	code?: string;
	setCode?: (string) => void;
	onFinish: () => void;
}

export interface RegisterFormProps {
	form: FormInstance;
	loading: boolean;
	errorInfo: string;
	setErrorInfo: (string) => void;
	email?: string;
	setEmail?: (string) => void;
	telAreaCode?: string;
	setTelAreaCode?: (string) => void;
	mobile?: string;
	setMobile?: (string) => void;
	code?: string;
	setCode?: (string) => void;
	onFinish: () => void;
}

export interface RecoverFormProps {
	form: FormInstance;
	loading: boolean;
	errorInfo: string;
	setErrorInfo: (string) => void;
	email?: string;
	setEmail?: (string) => void;
	telAreaCode?: string;
	setTelAreaCode?: (string) => void;
	mobile?: string;
	setMobile?: (string) => void;
	code?: string;
	setCode?: (string) => void;
	onFinish: () => void;
}
