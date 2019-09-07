import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import C from '../components';
import withDataHandler, {
  DataHandlerType,
} from '../components/withDataHandler';

type Props = {
  dataHandler: DataHandlerType;
};

const Home: React.FC<Props> = ({ dataHandler }) => {
  const [count, setCounter] = useState(0);

  const onMount = () => {
    console.log('home page mounted');

    dataHandler.doRequest({
      route: '/pokemon/squirtle',
      method: 'GET',
    });
  };
  const onUnmount = () => {
    console.log('home page unmounted');
  };

  return (
    <C.PageWrapper title="Home Page" onMount={onMount} onUnmount={onUnmount}>
      <C.Text tag="h1" style={styles.title}>
        Home {count.toString()}
      </C.Text>
      <br></br>
      <button onClick={() => setCounter(count + 1)}>increment</button>
      <br></br>
      <button onClick={() => setCounter(count - 1)}>decrement</button>
      <br></br>
      <br></br>
      <span>
        My favorite pokemon is:{' '}
        {dataHandler.isLoading ? (
          'thinking...'
        ) : (
          <strong>
            <i>{dataHandler.data.name}</i>
          </strong>
        )}
      </span>
      <br></br>
      <Link to="/about">Go to About Page</Link>
    </C.PageWrapper>
  );
};

const styles: { [name: string]: React.CSSProperties } = {
  title: {
    color: 'green',
  },
};

export default withDataHandler(Home);
