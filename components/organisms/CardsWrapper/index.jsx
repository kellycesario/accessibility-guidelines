import styles from './styles.module.scss';
import Card from '@molecules/Card';

export default function CardsWrapper({ categories }) {
  return (
    <section className={styles.cards}>
      <Card
        aria-label="Visit the page All Guidelines"
        image="/assets/img/all-guidelines.png"
        name="All guidelines"
        size="large"
        link="/categories"
        isStatic
      />
      {categories.map((category, index) => (
        <Card
          image={category.image}
          name={category.name}
          description={category.description}
          key={index}
          link={{
            pathname: '/categories',
            query: {
              select: category.slug,
            },
          }}
        />
      ))}
    </section>
  );
}
