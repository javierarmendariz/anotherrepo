import React, { Component } from 'react';
import Home from '../home/Home';
import styles from './App.scss';

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Home />
      </div>
    );
  }
}

export default App;
