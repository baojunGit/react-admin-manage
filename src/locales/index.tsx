import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

// antd design
import { ConfigProvider } from 'antd';
import zhCNAntd from 'antd/locale/zh_CN';
import enUSAntd from 'antd/locale/en_US';
import { Locale } from 'antd/lib/locale';

// zustand
import { useLanguageStore } from '../store';
import zhCN from './zh-CN';
import enUS from './en-US';

interface Props {
	children: ReactNode;
}

type Messages = {
	[key: string]: {
		[key: string]: string;
	};
};

type LocaleMessages = {
	[key: string]: Locale;
};

const messages: Messages = {
	'zh-CN': zhCN,
	'en-US': enUS
};

const mappingLocale: LocaleMessages = {
	'zh-CN': zhCNAntd,
	'en-US': enUSAntd
};

const Locales: React.FC<Props> = props => {
	// 使用 useLanguageStore 获取状态
	const language = useLanguageStore(state => state.language);
	return (
		// IntlProvider 组件是 react-intl 库提供的一个高阶组件, 将国际化所需的配置信息传递给子组件
		<IntlProvider messages={messages[language]} locale={language}>
			{/* ConfigProvider 是 antd提供的一个高阶组件, 将国际化所需的配置信息传递给子组件 */}
			<ConfigProvider locale={mappingLocale[language]}>
				{props.children}
			</ConfigProvider>
		</IntlProvider>
	);
};

export default Locales;
