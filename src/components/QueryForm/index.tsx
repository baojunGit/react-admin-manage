import { Row } from 'antd';
import React from 'react';

// react中，组件的子组件都存在props.children中，
// 直接在jsx中对应的位置渲染props.children就可以
const QueryForm: React.FC = (props) => {
  return (
    <Row className='query-form' gutter={0}>
      {props.children ?? '后备信息，以防万一'}
    </Row>
  );
};

export default QueryForm;
