module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		// 用prettier替换了部分ESLint里冲突的规则，放在extends的最后，覆盖其它规则
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	globals: {
        __APP_INFO__: 'readonly' // 添加全局变量 __APP_INFO__
    },
	// 添加或覆盖规则配置
	rules: {
		'prettier/prettier': 'error', // 将 Prettier 错误显示为 ESLint 错误
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		// 关闭文件只能导出 React 组件提醒（动态导入组件的快捷方式不被允许，所以关闭）
		'react-refresh/only-export-components': 'off',
		// 禁止使用 any 类型
		'@typescript-eslint/no-explicit-any': 'off',
		// useEffect 的依赖项警告
		'react-hooks/exhaustive-deps': 'off'
	}
};
