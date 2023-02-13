import styles from './styles.module.scss';
import ContactForm from '@organisms/ContactForm';
import useContentful from '../../hooks/useContentful';
import contentfulTypes from '../../hooks/contentfulTypes';

export default function GetInTouch({ categories }) {
  const subjectFormContent = [
    { key: 'Guideline Suggestion', name: 'Guideline Suggestion' },
    { key: 'Tool Suggestion', name: 'Tool Suggestion' },
    { key: 'Recommendations', name: 'Recommendations' },
  ];

  return (
    <section className={styles.GetInTouch}>
      <ContactForm
        categories={categories}
        subjectForm={subjectFormContent}
        tags={categories}
      />
    </section>
  );
}

export const getStaticProps = async (ctx) => {
  const { getEntries } = useContentful();

  const response = await getEntries({
    content_type: contentfulTypes.category,
  });

  return {
    props: {
      categories: response,
    },
  };
};
