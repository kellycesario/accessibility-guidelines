import Headings from "@atoms/Headings";
import Text from "@atoms/Text"

import styles from "./styles.module.scss";

export default function Hero({ title, description }) {
  return (
    <div className={styles.hero}>
      <Headings level="1" color="white">{title}</Headings>
      <Text color="white">{description}</Text>
    </div>
  );
}
