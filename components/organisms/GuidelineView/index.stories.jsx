import { useState } from 'react';
import GuidelineView from '.';

const categories = [
  { slug: 'design', category: 'Design' },
  { slug: 'multimedia', category: 'Multimedia' },
];

const guidelines = [
  {
    title: 'Use REM and EM measurements (not pixels).',
    categories: [
      {
        fields: {
          category: categories[0].category,
        },
      },
    ],
  },
  {
    title: 'Do not pass information JUST by color.',
    categories: [
      {
        fields: {
          category: categories[0].category,
        },
      },
    ],
  },
  {
    title:
      'Use a layout with visual consistency and easily identifiable patterns.',
    categories: [
      {
        fields: {
          category: categories[0].category,
        },
      },
    ],
  },
  {
    title: 'Make sure there is consistency between icons and their meaning.',
    categories: [
      {
        fields: {
          category: categories[0].category,
        },
      },
    ],
  },

  {
    title: 'Make sure that your video also has audio description (captions).',
    categories: [
      {
        fields: {
          category: categories[1].category,
        },
      },
    ],
  },
  {
    title: 'Make sure that your video has textual transcription.',
    categories: [
      {
        fields: {
          category: categories[1].category,
        },
      },
    ],
  },
  {
    title: 'Videos should have subtitles in the target users native language.',
    categories: [
      {
        fields: {
          category: categories[1].category,
        },
      },
    ],
  },
  {
    title:
      'Videos should be accompanied by an interpretation in sign language.',
    categories: [
      {
        fields: {
          category: categories[1].category,
        },
      },
    ],
  },
];

export default {
  title: 'Organisms/GuidelineView',
  component: GuidelineView,
  argTypes: {
    categories: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = () => {
  const [viewType, setViewType] = useState('list');
  const [categoryActive, setCategoryActive] = useState('');

  return (
    <GuidelineView
      categories={categories}
      viewType={viewType}
      guidelines={guidelines}
      categoryActive={categoryActive}
    />
  );
};

Default.args = {
  categories: categories,
};
