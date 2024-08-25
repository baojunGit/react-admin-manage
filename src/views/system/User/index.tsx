import QueryForm from '@/components/QueryForm';
import QueryFormTopPanel from '@/components/QueryForm/components/QueryFormTopPanel';
import { Form } from 'antd';

const User = () => {
	return (
		<div id="user-container">
			<QueryForm>
				<QueryFormTopPanel>
					<Form></Form>
				</QueryFormTopPanel>
			</QueryForm>
		</div>
	);
};

export default User;
