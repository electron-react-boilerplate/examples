import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import SerialPort from 'serialport/test';
import serialport from 'serialport';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const MockBinding = SerialPort.Binding;

console.log(serialport);

// Create a port and enable the echo and recording.
MockBinding.createPort('/dev/ROBOT', { echo: true, record: true });
const port = new SerialPort('/dev/ROBOT');
console.log(port);

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
