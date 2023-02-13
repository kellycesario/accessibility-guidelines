import useContentful from '../../hooks/useContentful';
import contentfulTypes from '../../hooks/contentfulTypes';
import ToolsWrapper from '@organisms/ToolsWrapper';

export default function TestsPage({ data }) {
  return (
    <section>
      <ToolsWrapper data={data} />
    </section>
  );
}

export async function getStaticProps() {
  const { getEntries } = useContentful();
  const data = await getEntries({
    content_type: contentfulTypes.tool,
    select: 'fields',
  });
  return { props: { data }, revalidate: 3600 };
}
