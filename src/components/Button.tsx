import React, { MouseEventHandler } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

function Button(props: ButtonProps) {
  const { text, onClick, disabled = false, className } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.button, className)}
    >
      {text}
    </button>
  );
}

export { Button };
