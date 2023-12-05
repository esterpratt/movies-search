import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Table } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { SearchInput } from '../../components/SearchInput';
import { getMovies } from '../../api/getMovies';
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
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: movies,
  } = useQuery({
    queryKey: ['movies', { title, page }],
    queryFn: getMovies,
    enabled: !!title,
  });

  function onSearch(text: string) {
    setPage(1);
    setTitle(text);
  }

  const onClickPagination = useCallback((num: number) => {
    setPage(num);
  }, []);

  return (
    <div>
      <p className={styles.searchText}>Search for any movie you like:</p>
      <SearchInput placeholder="Type movie name..." onClick={onSearch} />
      {isLoading && <div className={styles.loading}>Loading...</div>}
      {isError && (
        <div className={styles.error}>
          Sorry there was in issue... Please try again
        </div>
      )}
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
