import React from 'react';
import { Col } from 'antd';

const QueryFormTopPanel: React.FC = (props) => {
  // props.children不一定是数组，当只有一个元素的时候就不是数组
  return <Col span={24}>{props.children}</Col>;
};

export default QueryFormTopPanel;
