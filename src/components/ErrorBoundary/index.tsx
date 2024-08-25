import { Component, ReactElement } from 'react';
import { Button } from 'antd';

interface State {
	hasError: boolean;
}

interface Props {
	children: ReactElement;
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.log(error);
		console.log(info);
	}

	handleRetry = () => {
		this.setState({ hasError: false });
		location.reload();
	};

	render() {
		if (this.state.hasError) {
			return (
				<div>
					<h2>不好意思，页面发生错误！</h2>
					<Button color="primary" onClick={this.handleRetry}>
						重试一次试试？
					</Button>
				</div>
			);
		}
		return this.props.children;
	}
}
