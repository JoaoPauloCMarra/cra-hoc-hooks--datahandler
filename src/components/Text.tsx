import React from 'react';

type Props = {
  children: string | string[];
  tag?: string;
  style?: React.CSSProperties;
};

const Text: React.FC<Props> = ({
  children,
  tag = 'span',
  style = defaultStlye,
}) => {
  const CustomTag: any = `${tag}`;

  return <CustomTag style={style}>{children}</CustomTag>;
};

const defaultStlye = {
  color: 'black',
};

export default Text;
