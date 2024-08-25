import React, { useState } from 'react';
import styles from './NoticeContent.module.scss';
import { Tabs, Avatar, Tooltip, Tag, Button } from 'antd';
const { TabPane } = Tabs;

interface NoticeItem {
  avatar: string;
  title: string;
  datetime: string;
  description: string;
  extra?: string;
  status?: string;
  type: string;
}

interface TabItem {
  key: string;
  name: string;
  noticeList: Array<NoticeItem>;
}

interface PropsType {
  data: Array<TabItem>;
}
const NoticeContent: React.FC<PropsType> = ({ data: tabsList }) => {
  const [toolTipContent, setToolTipContent] = useState('');
  const hasTipContent = (e, content) => {
    // e.target可能会获取到子元素，这里用currentTarget
    const parentHeight = e.currentTarget?.offsetHeight;
    // 想获取到子元素的element节点，最好使用children方法，
    // childNodes方法以及firstChild方法在现代浏览器中使用，都会把元素标签中的空白节点检测出来
    const childHeight = e.currentTarget?.children[0]?.offsetHeight;
    if (childHeight > parentHeight) {
      setToolTipContent(content);
      return;
    }
    setToolTipContent(null);
  };
  return (
    <div className={styles['notice-content']}>
      <Tabs
        centered
        tabBarStyle={{ margin: 0 }}
        tabBarGutter={60}
        defaultActiveKey='1'>
        {tabsList.map(({ key, name, noticeList }) => (
          <TabPane
            className={styles['tab-pane']}
            tab={`${name}(${noticeList.length})`}
            key={key}>
            <ul className={styles['notice-wrap']}>
              {noticeList.map((i, index) => (
                <li className={styles['notice-item']} key={index}>
                  {/* 左边图片部分 */}
                  {i?.avatar && (
                    <Avatar
                      className={styles['item-avatar']}
                      size={30}
                      src={i.avatar}></Avatar>
                  )}
                  {/* 标题文字部分 */}
                  <div className={styles['item-text']}>
                    <div className={styles['text-title']}>
                      <Tooltip title={toolTipContent}>
                        <div
                          onMouseEnter={(e) => hasTipContent(e, i?.title)}
                          className={styles['title-content']}>
                          <span>{i?.title}</span>
                        </div>
                      </Tooltip>
                      {i?.extra && <Tag color={i?.status}>{i.extra}</Tag>}
                    </div>
                    {i?.description && (
                      <Tooltip title={toolTipContent}>
                        <div
                          onMouseEnter={(e) => hasTipContent(e, i?.description)}
                          className={styles['text-description']}>
                          <span>{i?.description}</span>
                        </div>
                      </Tooltip>
                    )}
                    {i?.datetime && (
                      <div className={styles['text-dateime']}>
                        {i?.datetime}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </TabPane>
        ))}
      </Tabs>
      <div className={styles['notice-clear']}>
        <Button type='text'>
          <div className={styles['text-wrap']}>
            <i className='iconfont icon-anniu_guanbi'></i>
            <span>清空消息</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NoticeContent;
