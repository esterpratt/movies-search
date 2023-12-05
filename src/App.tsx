import React from 'react';
import { Movies } from './pages/movies/Movies';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1>Movies search</h1>
      <Movies />
    </div>
  );
}

export default App;
