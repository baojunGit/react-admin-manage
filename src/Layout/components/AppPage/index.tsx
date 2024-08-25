import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { RouterView, PageFooter } from './components';

const AppPage = () => {
	const { pathname } = useLocation();
	const pageRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		pageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);
	return (
		<div id="app-page" className="app-page" ref={pageRef}>
			<main>
				<RouterView></RouterView>
			</main>
			<PageFooter />
		</div>
	);
};

export default AppPage;
