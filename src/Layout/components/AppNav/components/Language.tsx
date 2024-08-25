import { Dropdown, Menu } from 'antd';
import useLanguageStore from '@/store/modules/language';

const Language = () => {
	const { language, setLanguage } = useLanguageStore();

	const dropdownRender = () => {
		return (
			<Menu
				onClick={({ key }) => setLanguage(key)}
				items={[
					{
						key: 'en',
						label: (
							//  ！# react特殊用法
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="!#"
								onClick={e => e.preventDefault()}
							>
								English
							</a>
						),
						disabled: language === 'en'
					},
					{
						key: 'zh',
						label: (
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="!#"
								onClick={e => e.preventDefault()}
							>
								中文
							</a>
						),
						disabled: language === 'zh'
					}
				]}
			/>
		);
	};
	return (
		<div className="international">
			<Dropdown
				dropdownRender={() => dropdownRender()}
				placement="bottom"
				arrow
			>
				<i className="iconfont icon-wenzi"></i>
			</Dropdown>
		</div>
	);
};

export default Language;
