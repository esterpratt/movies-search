import React, { ChangeEvent, useState } from 'react';
import { Button } from './Button';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
  onClick: (text: string) => void;
}

function SearchInput(props: SearchInputProps) {
  const { placeholder, onClick: onClickSearchButton } = props;
  const [inputText, setInputText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input
        placeholder={placeholder}
        value={inputText}
        onChange={handleChange}
        className={styles.input}
      />
      <Button
        text="Search"
        onClick={() => onClickSearchButton(inputText)}
        className={styles.button}
      />
    </div>
  );
}

export { SearchInput };
