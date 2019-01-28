// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Flag, Segment } from 'semantic-ui-react'
import routes from '../constants/routes';
import styles from './Home.css';

const FlagExampleFlag = () => (
  <Segment>
    <Flag name='ae' />
    <Flag name='france' />
    <Flag name='myanmar' />
  </Segment>
)

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <FlagExampleFlag />
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
