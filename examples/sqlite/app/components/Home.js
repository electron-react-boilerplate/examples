// @flow
/* eslint no-plusplus: off */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sqlite from 'sqlite3';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};
type State = {
  results: Array<string>
};

export default class Home extends Component<Props, State> {
  props: Props;

  sqlite: sqlite;

  state: State = {
    results: []
  };

  componentDidMount() {
    const sqlite3 = sqlite.verbose();
    this.db = new sqlite3.Database(':memory:');

    this.db.serialize(() => {
      this.db.run('CREATE TABLE lorem (info TEXT)');

      const stmt = this.db.prepare('INSERT INTO lorem VALUES (?)');
      for (let i = 0; i < 10; i++) {
        stmt.run(`Ipsum ${i}`);
      }
      stmt.finalize();

      const results = [];

      this.db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
        console.log(`${row.id}: ${row.info}`);
        results.push(`${row.id}: ${row.info}`);
        this.setState({
          results
        });
      });
    });
  }

  componentWillUnmount() {
    this.db.close();
  }

  render() {
    const { results } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        {results.map(result => (
          <h4 key={result}>{result}</h4>
        ))}
      </div>
    );
  }
}
