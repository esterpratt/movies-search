import React, { useMemo } from 'react';
import { Button } from './Button';
import styles from './Pagination.module.scss';

interface PaginationProps {
  length: number;
  onClickPagination: (num: number) => void;
  currentPage: number;
}

function Pagination(props: PaginationProps) {
  const { length, onClickPagination, currentPage } = props;

  const pageNums = useMemo(() => {
    if (length < 2) {
      return [];
    }
    const pages = [];
    for (let i = 1; i <= length; i++) {
      pages.push(
        <Button
          key={i}
          text={`${i}`}
          onClick={() => onClickPagination(i)}
          className={styles.paginationButton}
          disabled={currentPage === i}
        />
      );
    }
    return pages;
  }, [length, onClickPagination, currentPage]);

  return (
    <div className={styles.pagination}>
      <div className={styles.pageNums}>{pageNums}</div>
      <p>
        {length} Total page{length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}

export { Pagination };
