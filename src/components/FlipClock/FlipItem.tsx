import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

// 这里不要写React.FC类型，会报错
const FlipItem = (props, ref: any) => {
  // 翻转方向
  const [flipType, setFlipType] = useState('down');
  // 翻转状态
  const [isFlipping, setIsFlipping] = useState(false);
  // 前牌文字
  const [frontText, setFrontText] = useState(0);
  // 后牌文字
  const [backText, setBackText] = useState(1);
  const duration = useRef(600);
  const textClass = (number: number) => {
    return 'number' + number;
  };
  const flip = (type: string, front: number, back: number) => {
    // console.log(frontText.value)
    // console.log(front)
    // 如果处于翻转中，则不执行
    if (isFlipping) return false;
    setFrontText(front);

    setBackText(back);
    // 根据传递过来的type设置翻转方向
    setFlipType(type);
    // 设置翻转状态为true
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setFrontText(back);
    }, duration.current);
  };
  // 下翻牌
  const flipDown = (front: any, back: any): void => {
    flip('down', front, back);
  };
  // 上翻牌
  const flipUp = (front: any, back: any): void => {
    flip('up', front, back);
  };
  // 设置前牌文字
  const setFront = (text: number): void => {
    setFrontText(text);
  };
  // 设置后牌文字
  const setBack = (text: number): void => {
    setBackText(text);
  };

  // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例属性。
  useImperativeHandle(ref, () => ({
    flipDown,
    flipUp,
    setFront,
    setBack,
  }));

  return (
    <div className={`m-flipper ${flipType} ${isFlipping ? 'go' : ''}`}>
      <div className={`digital front ${textClass(frontText)}`}></div>
      <div className={`digital back ${textClass(backText)}`}></div>
    </div>
  );
};

export default forwardRef(FlipItem);
