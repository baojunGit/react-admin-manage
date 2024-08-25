import { create } from 'zustand';
// persist中间件在 Zustand 状态管理中实现状态的持久化。
// 它可以将状态存储在本地存储（如 localStorage）中，并在页面刷新或重新加载后自动恢复状态
import { persist } from 'zustand/middleware';

interface LanguageStore {
	language: string;
	setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageStore>()(
	persist(
		set => ({
			language: 'zh-CN', // 默认zh-CN中文，en-US英文
			setLanguage: language => set({ language })
		}),
		// name: "language" 定义了存储在本地存储localStorage中的键（key）
		{
			name: 'language'
		}
	)
);

export default useLanguageStore;
