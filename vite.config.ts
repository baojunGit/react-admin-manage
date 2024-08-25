import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// 安装@types/node，提供node的path模块类型提示
import { resolve } from 'path';

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
	}
});
