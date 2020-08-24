import React from 'react';
import { Link } from 'react-router-dom';
import path from 'path';
import { exec } from 'child_process';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  const [output, setOutput] = React.useState('');

  function callPython() {
    const pythonBinary = path.join(__dirname, 'assets', 'python');
    const pythonScript = 'print("Hello World from Python")';
    exec(`echo '${pythonScript}' | ${pythonBinary}`, (error, stdout) => {
      setOutput(stdout);
    });
  }

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <button onClick={callPython}>Call Python in console</button>
      <p>{`stdout: ${output}`}</p>
    </div>
  );
}
