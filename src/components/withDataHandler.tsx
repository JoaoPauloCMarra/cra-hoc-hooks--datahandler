import React, { useReducer, useEffect } from 'react';

export type RequestConfigType = {
  route: string;
  body?: any;
  method?: string;
};

export type DataHandlerType = {
  isLoading: boolean;
  data: any;
  error?: string;
  doRequest: (config: RequestConfigType) => void;
};

const initialState = {
  isLoading: false,
  data: [],
  error: undefined,
};

const withDataHandler = (WrappedComponent: any) => {
  let mounted = true;

  return (props: any) => {
    const [state, dispatch] = useReducer(
      (state, nextState) => ({ ...state, ...nextState }),
      initialState
    );

    useEffect(() => {
      mounted = true;
      return () => {
        mounted = false;
      };
    }, []);

    const doRequest = async ({ route, body, method }: RequestConfigType) => {
      dispatch({ isLoading: true, error: undefined });
      try {
        const response = await fetch(process.env.REACT_APP_API + route, {
          method: method || 'GET',
          mode: 'cors',
          body:
            body && body.constructor === Object
              ? JSON.stringify(body)
              : typeof body === 'string'
              ? body
              : undefined,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setTimeout(() => {
          if (mounted) {
            dispatch({ isLoading: false, data });
          }
        }, 3000);
      } catch (error) {
        if (mounted) {
          dispatch({ isLoading: false, error: error.message, data: [] });
        }
      }
    };

    return (
      <WrappedComponent
        {...{ ...props, dataHandler: { ...state, doRequest } }}
      />
    );
  };
};

export default withDataHandler;
