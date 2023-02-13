import styles from './styles.module.scss';
import ToolsItem from '@molecules/ToolsItem';
import Tag from '@atoms/Tag';
import Button from '@atoms/Button';

export default function ToolsWrapper({ data }) {
  return (
    <section className={styles.toolsWrapper}>
      {data.map((item) => (
        <div className={styles.toolsWrapper__content} key={item.id}>
          <ToolsItem
            name={item.name}
            link={item.link}
            description={item.description}
          />
          <div className={styles.toolsWrapper__tags}>
            {item.categories.map((item) => (
              <Tag text="text" label={item.fields.category} key={item.sys.id} />
            ))}
          </div>
          <Button href={item.url} target="_blank" color="blue" size="default">
            Go to site
          </Button>
        </div>
      ))}
    </section>
  );
}
