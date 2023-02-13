import Filter from '.';

const categories = [
  { slug: 'design', category: 'Design' },
  { slug: 'multimedia', category: 'Multimedia' },
  { slug: 'styling', category: 'Styling' },
  { slug: 'structure', category: 'Structure' },
];

export default {
  title: 'Molecules/Filter',
  component: Filter,
  args: {
    categories: categories,
  },
  argTypes: {
    categories: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = {};
