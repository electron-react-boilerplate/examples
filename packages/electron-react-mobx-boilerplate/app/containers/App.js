// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import DevTools from 'mobx-react-devtools';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <DevTools position={{
          bottom: 0,
          right: 20
        }} />
        <div>{this.props.children}</div>
      </div>
    );
  }
}
