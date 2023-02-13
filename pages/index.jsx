import TestBanner from '@molecules/TestBanner';
import AdvertisingBanner from '@organisms/AdvertisingBanner';
import CardsWrapper from '@organisms/CardsWrapper';
import contentfulTypes from '../hooks/contentfulTypes';
import useContentful from '../hooks/useContentful';

export default function Home({ categories }) {
  return (
    <>
      <CardsWrapper categories={categories} />
      <TestBanner />
      <AdvertisingBanner />
    </>
  );
}

export async function getStaticProps() {
  const { getEntries } = useContentful();
  const categories = await getEntries({
    content_type: contentfulTypes.category,
    select: 'fields',
    order: 'fields.category',
  });
  return { props: { categories }, revalidate: 3600 };
}
