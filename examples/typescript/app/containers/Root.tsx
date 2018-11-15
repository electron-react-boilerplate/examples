import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, ConnectedRouterProps } from 'react-router-redux';
import Routes from '../routes';

type RootType = ConnectedRouterProps<any>;

export default function Root({ store, history }: RootType) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}
