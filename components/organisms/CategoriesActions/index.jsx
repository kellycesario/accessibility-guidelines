import { useState } from 'react';
import ToggleView from '@molecules/ToggleView';
import styles from './styles.module.scss';
import Filter from '@molecules/Filter';

export default function CategoriesActions({
  categories,
  filterConfig,
  viewType,
  setViewType,
}) {
  function toggleViewType(e, mode) {
    e.preventDefault();
    setViewType(mode);
  }

  return (
    <section className={styles.categoriesActions}>
      <Filter categories={categories} {...filterConfig} />
      <ToggleView mode={viewType} toggleViewType={toggleViewType} />
    </section>
  );
}
