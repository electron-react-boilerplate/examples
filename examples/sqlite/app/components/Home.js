// @flow
/* eslint no-plusplus: off */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

type Props = {};
type State = {
  results: Array<string>
};

export default class Home extends Component<Props, State> {
  props: Props;

  state: State = {
    results: []
  };

  componentDidMount() {
    db.serialize(() => {
      db.run('CREATE TABLE lorem (info TEXT)');

      const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
      for (let i = 0; i < 10; i++) {
        stmt.run(`Ipsum ${i}`);
      }
      stmt.finalize();

      const results = [];

      db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
        console.log(`${row.id}: ${row.info}`);
        results.push(`${row.id}: ${row.info}`);
        this.setState({
          results
        });
      });
    });

    db.close();
  }

  render() {
    const { results } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        {results.map(result => (
          <h4>{result}</h4>
        ))}
      </div>
    );
  }
}
