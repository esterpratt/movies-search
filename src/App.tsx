import React from 'react';
import { Movies } from './pages/movies/Movies';
import styles from './App.module.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.app}>
        <h1>Movies search</h1>
        <Movies />
      </div>
    </QueryClientProvider>
  );
}

export default App;
