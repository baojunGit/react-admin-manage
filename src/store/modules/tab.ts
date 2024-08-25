import { create } from 'zustand';

// 定义 TabStore 接口
interface TabStore {
	visitedTabs: any[];
	getVisitedTabs: () => any[];
	addVisitedTab: (route: any) => void;
	delVisitedTab: (path: string) => void;
	delOthersVisitedTabs: (path: string) => void;
	delLeftVisitedTabs: (path: string) => void;
	delRightVisitedTabs: (path: string) => void;
	delAllVisitedTabs: () => void;
}

// 定义过滤的标签名
const filterTabs = ['redirect'];

// 使用 Zustand 创建 store
const useTabStore = create<TabStore>((set, get) => ({
	visitedTabs: [],

	// 获取不在 filterTabs 里的标签页
	getVisitedTabs: () => {
		return get().visitedTabs.filter(tab => !filterTabs.includes(tab.name));
	},

	// 添加标签页
	addVisitedTab: route => {
		set(state => {
			const target = state.visitedTabs.find(item => item.name === route.name);
			if (target) {
				return {
					visitedTabs: state.visitedTabs.map(tab =>
						tab.name === route.name ? route : tab
					)
				};
			}
			return { visitedTabs: [...state.visitedTabs, route] };
		});
	},

	// 删除当前标签页
	delVisitedTab: path => {
		set(state => ({
			visitedTabs: state.visitedTabs.filter(route => route.path !== path)
		}));
	},

	// 删除当前及不可关闭标签页以外的其它全部标签页
	delOthersVisitedTabs: path => {
		set(state => ({
			visitedTabs: state.visitedTabs.filter(
				route => route.meta.noCloseTab || route.path === path
			)
		}));
	},

	// 删除当前及不可关闭标签页左边全部标签页
	delLeftVisitedTabs: path => {
		set(state => {
			let found = false;
			return {
				visitedTabs: state.visitedTabs.filter(route => {
					if (route.path === path) found = true;
					return route.meta.noCloseTab || found;
				})
			};
		});
	},

	// 删除当前及不可关闭标签页右边全部标签页
	delRightVisitedTabs: path => {
		set(state => {
			let found = false;
			return {
				visitedTabs: state.visitedTabs.filter(route => {
					const close = found;
					if (route.path === path) found = true;
					return route.meta.noCloseTab || !close;
				})
			};
		});
	},

	// 删除不可关闭标签页以外的全部标签页
	delAllVisitedTabs: () => {
		set(state => ({
			visitedTabs: state.visitedTabs.filter(route => route.meta.noCloseTab)
		}));
	}
}));

export default useTabStore;
