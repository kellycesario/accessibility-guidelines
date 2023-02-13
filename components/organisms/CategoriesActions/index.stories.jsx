import { useState } from 'react';
import CategoriesActions from '.';
import Svg from "../../ions/Svg";

const categories = [
  { slug: 'design', category: 'Design' },
  { slug: 'multimedia', category: 'Multimedia' },
  { slug: 'styling', category: 'Styling' },
  { slug: 'structure', category: 'Structure' },
];

export default {
  title: 'Organisms/CategoriesActions',
  component: CategoriesActions,
  args: {
    categories: categories,
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Svg />
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => {
  const [viewType, setViewType] = useState('list');
  const [categoryActive, setCategoryActive] = useState('');

  const filterSelectHandler = (value) => {
    setCategoryActive(value);
  };

  const filterConfig = {
    active: categoryActive,
    onSelect: filterSelectHandler,
  };

  return (
    <CategoriesActions
      categories={categories}
      viewType={viewType}
      setViewType={setViewType}
      filterConfig={filterConfig}
    />
  );
};
