
import React from 'react';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

export default function Root({ store }) {
  return (
    <Provider {...store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
