/**
 * 路由mock数据
 * id: 路由编号
 * path: 路由模块路径, 有特定格式要求容易报错，注意不要设置为空，空会覆盖之前的/设置跳转的路由，不选它为路由跳转标识
 * name: 路由名和合法的url外链
 * frameSrc：内联外部地址
 */
// 获取路由菜单接口
// 返回固定的数据 数据里包含 @符号的时候会报错

const mockList = [
	{
		id: '1',
		parentId: '0',
		name: 'layout',
		path: '/',
		component: 'Layout',
		icon: 'iconfont icon-index',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: true,
		noCloseTab: false,
		sort: 1,
		isNew: false,
		menuType: 0, // 0目录，1菜单，2按钮
		children: [
			{
				id: '11',
				parentId: '1',
				name: '首页',
				path: 'home',
				component: 'Home',
				icon: 'iconfont icon-index',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: true,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	},
	{
		id: '2',
		parentId: '0',
		name: '系统管理',
		path: 'system',
		component: 'Layout',
		icon: 'iconfont icon-setup',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: false,
		noCloseTab: false,
		sort: 2,
		isNew: false,
		menuType: 0,
		children: [
			{
				id: '21',
				parentId: '2',
				name: '用户管理',
				path: 'user',
				component: 'system/User',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '22',
				parentId: '2',
				name: '角色管理',
				path: 'role',
				component: 'system/Role',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 2,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '23',
				parentId: '2',
				name: '菜单管理',
				path: 'menu',
				component: 'system/Menu',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 3,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '24',
				parentId: '2',
				name: '数据字典',
				path: 'dict',
				component: 'system/Dict',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 4,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	},
	{
		id: '3',
		parentId: '0',
		name: '组件管理',
		path: 'case',
		component: 'Layout',
		icon: 'iconfont icon-app',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: false,
		noCloseTab: false,
		sort: 3,
		isNew: false,
		menuType: 0,
		children: [
			{
				id: '31',
				parentId: '3',
				name: '悬停效果',
				path: 'hover',
				component: 'case/Hover',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '32',
				parentId: '3',
				name: '数据模块',
				path: 'data-view',
				component: 'case/DataView',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 2,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '33',
				parentId: '3',
				name: '加载效果',
				path: 'loading',
				component: 'case/LoadingModule',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 3,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	},
	{
		id: '4',
		parentId: '0',
		name: '错误页面',
		path: 'error',
		component: 'Layout',
		icon: 'iconfont icon-warn',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: false,
		noCloseTab: false,
		sort: 4,
		isNew: false,
		menuType: 0,
		children: [
			{
				id: '41',
				parentId: '4',
				name: '401',
				path: '401',
				component: 'error/401',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			},
			{
				id: '42',
				parentId: '4',
				name: '404',
				path: '404',
				component: 'error/404',
				icon: '',
				frameSrc: '',
				external: false,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 2,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	},
	{
		id: '5',
		parentId: '0',
		name: '内嵌',
		path: 'iframe',
		component: 'Layout',
		icon: 'iconfont icon-link',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: false,
		noCloseTab: false,
		sort: 5,
		isNew: false,
		menuType: 0,
		children: [
			{
				id: '51',
				parentId: '5',
				name: 'react文档',
				path: 'react',
				component: 'iframe/React',
				icon: '',
				frameSrc: 'https://reactjs.org/',
				external: true,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	},
	{
		id: '6',
		parentId: '0',
		name: '外链',
		path: 'link',
		component: 'Layout',
		icon: 'iconfont icon-rongqi',
		frameSrc: '',
		external: false,
		hideInMenu: false,
		hideInBread: false,
		noCloseTab: false,
		sort: 6,
		isNew: false,
		menuType: 0,
		children: [
			{
				id: '61',
				parentId: '6',
				name: '谷歌',
				path: 'https://www.google.com.hk/',
				component: '',
				icon: '',
				frameSrc: '',
				external: true,
				hideInMenu: false,
				hideInBread: false,
				noCloseTab: false,
				sort: 1,
				isNew: false,
				menuType: 1,
				children: null
			}
		]
	}
];

const getMenuList = {
	url: '/menu/getMenuList',
	method: 'get',
	template: {
		msg: '获取成功',
		code: 0,
		data: mockList
	}
};

const arrApi = [getMenuList];

export default arrApi;
