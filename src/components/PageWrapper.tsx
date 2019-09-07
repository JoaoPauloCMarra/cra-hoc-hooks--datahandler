import React, { useEffect, memo } from 'react';

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
  title?: string;
  onMount?: Function;
  onUnmount?: Function;
};

const PageWrapper: React.FC<Props> = ({
  children,
  fullWidth = true,
  title = 'Noname Page',
  onMount,
  onUnmount,
}) => {
  useEffect(() => {
    if (onMount) {
      onMount();
    }
    if (onUnmount) {
      return () => onUnmount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const style: React.CSSProperties = {
    ...defaultStyle,
    margin: fullWidth ? 0 : '0 auto',
    width: fullWidth ? '100%' : '960px',
  };

  return <div style={style}>{children}</div>;
};

const defaultStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: '100%',
};

export default memo(PageWrapper);
