import { create } from 'zustand';

// 定义 MenuStore 类型接口
interface MenuStore {
	// 菜单列表
	menuList: any[];
	// 菜单是否折叠
	collapse: boolean;
	setMenu: (menuList: any[]) => void;
	toggleCollapse: () => void;
}

// 使用 Zustand 创建 store
export const useMenuStore = create<MenuStore>(set => ({
	// 初始状态
	menuList: [],
	collapse: false,

	// 设置菜单列表
	setMenu: menuList => set({ menuList }),

	// 切换菜单栏折叠状态
	toggleCollapse: () => set(state => ({ collapse: !state.collapse }))
}));

export default useMenuStore;
