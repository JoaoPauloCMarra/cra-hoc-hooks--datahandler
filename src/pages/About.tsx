import React from 'react';
import { Link } from 'react-router-dom';

import C from '../components';
import withDataHandler, {
  DataHandlerType,
} from '../components/withDataHandler';

type Props = {
  dataHandler: DataHandlerType;
};

const About: React.FC<Props> = () => {
  return (
    <C.PageWrapper title="About Page">
      <C.Text tag="h1" style={styles.title}>
        About
      </C.Text>
      <Link to="/">Go to Home Page</Link>
    </C.PageWrapper>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  title: {
    color: 'blue',
  },
};

export default withDataHandler(About);
