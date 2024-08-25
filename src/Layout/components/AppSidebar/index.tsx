import Logo from './components/Logo.tsx';
import VerticalMenu from './components/VerticalMenu.tsx';

const AppSidebar = () => {
	return (
		<div className="app-sidebar">
			<Logo />
			<VerticalMenu />
		</div>
	);
};

export default AppSidebar;
