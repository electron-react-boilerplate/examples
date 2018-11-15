// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fiber from 'fibers';
import styles from './Home.css';

function sleep(ms) {
  const fiber = Fiber.current;
  setTimeout(() => {
    fiber.run();
  }, ms);
  Fiber.yield();
}

Fiber(() => {
  console.log('wait...', new Date());
  sleep(1000);
  console.log('ok...', new Date());
})
.run();

console.log('back in main');

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
