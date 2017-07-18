import React, { Component } from 'react';
import styles from './Home.scss';

class Home extends Component {
  render () {
    return (
      <div className={styles.Home}>
        <div className={styles.child}>Child</div>
      </div>
    );
  }
}

export default Home;
