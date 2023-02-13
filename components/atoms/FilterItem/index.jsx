import styles from './styles.module.scss';

const FilterItem = ({ children, value, active, onClick }) => {
  const onClickHandler = () => {
    onClick(value);
  };

  return (
    <li
      className={`${styles.filter__item} ${
        active && styles['filter__item--active']
      }`}
    >
      <button
        className={styles.filter__button}
        type="button"
        onClick={onClickHandler}
      >
        {children}
      </button>
    </li>
  );
};

export default FilterItem;
