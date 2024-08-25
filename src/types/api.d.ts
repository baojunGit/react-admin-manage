// 接口相关全局的类型定义

declare interface ApiResponse {
	code: number;
	message: string;
	[key: string]: any; // 其他动态属性
}

declare interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

declare interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
