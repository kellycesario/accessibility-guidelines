import Card from '.';

export default {
  title: 'Molecules/Card',
  component: Card,
  args: {
    image: '/assets/img/card-example.webp',
    name: 'Design guidelines',
    description:
      'Lorem ipsum dolor sit amet. Qui voluptas nemo sit doloribus voluptatem a dolores culpa et quasi ullam.',
    link: '',
    isStatic: true,
    width: '125',
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    link: {
      table: {
        disable: true,
      },
    },
    isStatic: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    width: {
      table: {
        disable: true,
      },
    },
    height: {
      table: {
        disable: true,
      },
    },
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

export const Default = {};

export const Variant = {
  args: {
    image: '/assets/img/all-guidelines.png',
    name: 'All guidelines',
    size: 'large',
    description: '',
    isStatic: true,
  },
  argTypes: {
    description: {
      table: {
        disable: true,
      },
    },
  },
};
