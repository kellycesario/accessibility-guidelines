import CardsWrapper from '.';

const categories = [
  {
    name: 'Design',
    category: 'Design',
    description:
      'With the design guidelines, you have access to tips related to how to design an accessible project right from the start, including guidelines on colors, layout patterns, icons and others.',
    image: '',
  },
  {
    name: 'Multimedia',
    category: 'Multimedia',
    description:
      'With the multimedia guidelines, you have access to tips related to the use of  transcriptions (useful for hearing, visual and cognitive impairments), sign languages and related content in the videos in your project.',
  },
  {
    name: 'Structure',
    category: 'Structure',
    description:
      'With the structure guidelines, you have access to tips related to projects created in .html, .jsx, .tsx, .vue, and other file formats that make up the structure of your project.',
  },
  {
    name: 'Styling',
    category: 'Styling',
    description:
      'With the styling guidelines, you have access to tips related to how to style your project, whether with CSS, SCSS, Styled Components, among others, in an accessible way without avoiding what was proposed by the designer.',
  },
];

export default {
  title: 'Organisms/CardsWrapper',
  component: CardsWrapper,
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
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = {};
