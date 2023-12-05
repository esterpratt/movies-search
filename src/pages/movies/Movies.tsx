import React, { useCallback, useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { SearchInput } from '../../components/SearchInput';
import { getMoviesApi } from '../../api/getMovies';
import { Movies as MoviesType } from '../../types/Movies';
import styles from './Movies.module.scss';

const columns = [
  {
    accessorKey: 'title',
    header: 'MOVIE NAME',
  },
  {
    accessorKey: 'year',
    header: 'YEAR',
  },
];

function Movies() {
  const [movies, setMovies] = useState<MoviesType | null>(null);
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getMovies() {
      if (!title) {
        setMovies(null);
      } else {
        const res = await getMoviesApi(title, page);
        setMovies(res);
      }
    }

    getMovies();
  }, [title, page]);

  function onSearch(text: string) {
    setTitle(text);
    setPage(1);
  }

  const onClickPagination = useCallback((num: number) => {
    setPage(num);
  }, []);

  return (
    <div>
      <p className={styles.searchText}>Search for any movie you like:</p>
      <SearchInput placeholder="Type movie name..." onClick={onSearch} />
      {movies && movies.data.length === 0 && <div>No Movies Found</div>}
      {movies && movies.data.length > 0 && (
        <div className={styles.tableContainer}>
          <Table
            data={movies.data}
            columns={columns}
            className={styles.table}
          />
          <Pagination
            length={movies.pages}
            onClickPagination={onClickPagination}
            currentPage={page}
          />
        </div>
      )}
    </div>
  );
}

export { Movies };
