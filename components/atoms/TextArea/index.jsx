import React from 'react';
import styles from './styles.module.scss';

const TextArea = React.forwardRef(
  ({ onChange, onBlur, name, placeholder, id, error, errorId }, ref) => {
    return (
      <textarea
        aria-errormessage={errorId}
        className={`${styles.textArea} ${error && styles['textArea--error']}`}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
      />
    );
  }
);

export default TextArea;
