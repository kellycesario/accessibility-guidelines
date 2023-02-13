import React, { useState } from 'react';
import styles from './styles.module.scss';
import FilterItem from '@atoms/FilterItem';
import Select from '@atoms/Select';

const Filter = ({ categories, active, onSelect }) => {
  const selectOptions = categories.map((category) => ({
    key: category.slug,
    name: category.category,
  }));

  const selectChangeHandler = (event) => {
    onSelect(event.target.value);
  };

  const filterListClickHandler = (value) => {
    onSelect(value);
  };

  return (
    <div className={styles.filter}>
      <ul className={styles.filter__list} aria-label="Navigate between guidelines categories">
        <FilterItem
          value=""
          active={active === ''}
          onClick={filterListClickHandler}
        >
          All
        </FilterItem>
        {categories.map((category) => (
          <FilterItem
            key={category.slug}
            value={category.slug}
            active={active === category.slug}
            onClick={filterListClickHandler}
          >
            {category.category}
          </FilterItem>
        ))}
      </ul>
      <Select
        className="select--filter"
        options={selectOptions}
        active={active}
        onSelect={selectChangeHandler}
        defaultValue=""
        dafaultLabel="All"
      />
    </div>
  );
};

export default Filter;
