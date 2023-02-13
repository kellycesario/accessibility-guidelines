import React from 'react';
import styles from './styles.module.scss';

const Select = React.forwardRef(
  (
    {
      options,
      active,
      onSelect,
      hasDefault = true,
      defaultValue,
      dafaultLabel,
      className,
      onChange,
      onBlur,
      name,
      error,
      errorId,
    },
    ref
  ) => {
    return (
      <select
        aria-errormessage={errorId}
        ref={ref}
        className={`${styles.select} ${className && styles[className]} ${
          error && styles['select--error']
        }`}
        value={active}
        onChange={onSelect ? onSelect : onChange}
        onBlur={onBlur}
        name={name}
      >
        {hasDefault && <option value={defaultValue}>{dafaultLabel}</option>}
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.name}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
