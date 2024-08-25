const PageFooter = () => {
	const fullYear = new Date().getFullYear();
	return <div className="page-footer">Copyright @{fullYear} baojunGit</div>;
};

export default PageFooter;
