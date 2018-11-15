import React from 'react';
import { render } from 'react-dom';
import opencv from 'opencv';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

opencv.readImage('./img/mona.png', (err, im) => {
  im.detectObject(opencv.FACE_CASCADE, {}, (err, faces) => {
    console.log(err);
    for (let i = 0; i < faces.length; i++) {
      const x = faces[i];
      im.ellipse(x.x + x.width / 2, x.y + x.height / 2, x.width / 2, x.height / 2);
    }
    im.save('./out.jpg');
  });
});

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
