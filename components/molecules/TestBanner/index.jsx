import Button from "@atoms/Button";
import Heading from "@atoms/Headings";
import styles from "./styles.module.scss";

export default function TestBanner() {
  return (
    <section className={styles.testBanner}>
      <Heading level="3" color="white">
      Want to know how to test your website?
      </Heading>
      <Button color="white" href="/tests" target="_self">
        Read More...
      </Button>
    </section>
  );
}
