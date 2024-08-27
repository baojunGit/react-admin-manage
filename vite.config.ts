import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// 安装@types/node，提供node的path模块类型提示
import { resolve } from 'path';

import dayjs from 'dayjs';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
	dependencies,
	devDependencies,
	name,
	version,
	// 每次编译或者打包都会更新时间
	updateTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/', // 默认就是/
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, 'src')
				// 另一种写法：'@': resolve(__dirname, './src')
			}
		]
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/styles/var.scss";`
			}
		}
	},
	server: {
		proxy: {
			// 将带v1的请求地址的前缀替换成target
			'/v1': {
				target: 'http://192.168.112.111:8081/',
				changeOrigin: true // 是否修改请求头中的 Origin 字段
				// rewrite: path => path.replace(/^\/v1/, '') // 重写请求路径，去掉 /v1 前缀
			}
		}
	},
	// define定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
	// 需要在global.d.ts里定义
	define: {
		// string 值会以原始表达式形式使用，所以如果定义了一个字符串常量，
		// 它需要被显式地打引号。（例如使用 JSON.stringify）
		__APP_INFO__: JSON.stringify(__APP_INFO__)
	}
});
