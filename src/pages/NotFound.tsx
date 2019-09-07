import React from 'react';
import { Link } from 'react-router-dom';

import C from '../components';

const NotFound: React.FC = () => {
  return (
    <C.PageWrapper title="404 - Page not found">
      <C.Text tag="h1" style={styles.title}>
        404 - Not Found
      </C.Text>
      <Link to="/">Go to Home Page</Link>
    </C.PageWrapper>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  title: {
    color: 'yellow',
  },
};

export default NotFound;
