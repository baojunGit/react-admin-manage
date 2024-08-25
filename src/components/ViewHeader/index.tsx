import React from 'react';
import { Divider, Tooltip } from 'antd';
import './index.scss';

type TviewData = {
  visualizationMode: string;
  title: string;
  description: string;
  label: string;
  isNew: boolean;
  data?: any[];
  barData1?: any[];
  barData2?: any[];
  peiData1?: any;
  pieData2?: any;
  statistic?: any[];
  period: string;
};

interface PropsType {
  viewData: TviewData;
}

const ViewHeader: React.FC<PropsType> = ({ viewData }) => {
  const { title, description } = viewData;
  return (
    <>
      <div className='view-header'>
        <div className='header-title'>
          {title}
          <Tooltip
            title={
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            }
            placement='rightTop'>
            <i className='iconfont icon-wenhao'></i>
          </Tooltip>
        </div>
        <i className='iconfont icon-jiaxingshoucangtianchong'></i>
      </div>
      <Divider style={{ margin: '0 0 10px 0' }} />
    </>
  );
};

export default ViewHeader;
