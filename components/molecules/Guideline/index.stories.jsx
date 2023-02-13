import Guideline from '.';

export default {
  title: 'Molecules/Guideline',
  component: Guideline,
  args: {
    guideline: 'Make sure there is consistency between icons and their meaning',
  },
  argTypes: {},
};

export const Default = {};
export const Variant = {
  args: {
    guideline: 'Make sure there is consistency between icons and their meaning',
    type: 'grid',
    image: '/assets/img/all-guidelines.png',
    isStatic: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(34rem, 62rem))',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
