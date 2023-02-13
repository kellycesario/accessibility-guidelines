import React from 'react';
import styles from './styles.module.scss';

const Tag = React.forwardRef(
  ({ label, isClicable, id, name, onChange, onBlur, value }, ref) => {
    let tagReturn = <p className={styles.tag}>{label}</p>;

    if (isClicable) {
      tagReturn = (
        <div>
          <input
            id={id}
            type="checkbox"
            className={styles.tag__checkbox}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            value={value}
          />
          <label className={styles.tag} htmlFor={id}>
            {label}
          </label>
        </div>
      );
    }
    return tagReturn;
  }
);

export default Tag;
