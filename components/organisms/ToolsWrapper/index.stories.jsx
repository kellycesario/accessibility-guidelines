import ToolsWrapper from '.';
import Svg from '../../ions/Svg';

const data = [
  {
    id: '1',
    name: 'Alt Text Tester',
    description:
      'Alt Text Tester is an extension used to show alternate text of image on hover.',
    url: 'https://chrome.google.com/webstore/detail/alt-text-tester/koldhcllpbdfcdpfpbldbicbgddglodk',
    categories: [
      {
        fields: {
          category: 'Structure',
        },
        sys: {
          id: 'category',
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Alt Text Tester',
    description:
      'Alt Text Tester is an extension used to show alternate text of image on hover.',
    url: 'https://chrome.google.com/webstore/detail/alt-text-tester/koldhcllpbdfcdpfpbldbicbgddglodk',
    categories: [
      {
        fields: {
          category: 'Structure',
        },
        sys: {
          id: 'category',
        },
      },
    ],
  },
  {
    id: '3',
    name: 'Alt Text Tester',
    description:
      'Alt Text Tester is an extension used to show alternate text of image on hover.',
    url: 'https://chrome.google.com/webstore/detail/alt-text-tester/koldhcllpbdfcdpfpbldbicbgddglodk',
    categories: [
      {
        fields: {
          category: 'Structure',
        },
        sys: {
          id: 'category',
        },
      },
    ],
  },
];

export default {
  title: 'Organisms/ToolsWrapper',
  component: ToolsWrapper,
  args: {
    data: data,
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ maxWidth: '1280px' }}>
          <Svg />
          <Story />
        </div>
      );
    },
  ],
};

export const Default = {};
