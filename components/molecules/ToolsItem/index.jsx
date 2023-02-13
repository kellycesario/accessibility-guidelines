import Heading from "@atoms/Headings";
import Text from "@atoms/Text";
import styles from "./styles.module.scss";

export default function ToolsItem({ name, description }) {
  return (
    <article className={styles.toolsItem}>
      <div className={styles.toolsItem__content}>
        <svg width={40} height={32}>
          <use href="#tool" xlinkHref="#tool" />
        </svg>
        <Heading level="2">Tool:</Heading>
      </div>
      <Text color="black" size="large">
        {name}
      </Text>

      <div className={styles.toolsItem__content}>
        <svg width={40} height={32}>
          <use xlinkHref="#description" href="#description" />
        </svg>
        <Heading level="2">Description:</Heading>
      </div>
      <Text color="black" size="large">
        {description}
      </Text>
    </article>
  );
}
