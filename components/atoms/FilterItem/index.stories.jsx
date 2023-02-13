import FilterItem from '.';

export default {
  title: 'Atoms/FilterItem',
  component: FilterItem,
  args: {
    value: '',
    children: 'All',
    active: false,
  },
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {};
