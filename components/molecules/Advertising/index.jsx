import Button from "@atoms/Button";
import Heading from "@atoms/Headings";
import styles from "./styles.module.scss";

export default function Advertising({ image, title }) {
  return (
    <article className={styles.advertising}>
      <img src={image} alt="" className={styles.advertising__image} />
      <Heading level="3" align="left" color="white">
        {title}
      </Heading>
      <Button href="/get-in-touch" target="_self">
        Write to us
      </Button>
    </article>
  );
}
