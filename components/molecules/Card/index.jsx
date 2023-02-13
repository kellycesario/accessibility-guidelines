import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import Heading from "@atoms/Headings";
import Text from "@atoms/Text";

export default function Card({
  image,
  name,
  description,
  size,
  link,
  isStatic = false,
  width = 1140,
  height = 336,
}) {
  const classList = [];
  classList.push(styles[`card--${size}`]);

  return (
    <Link
      aria-label={"Visit the page " + name + description}
      href={link}
      className={size === "large" ? styles.card__link : ""}
    >
      <article className={styles.card}>
        <Image
          src={isStatic ? image : "https:" + image}
          width={width}
          height={height}
          alt=""
          className={styles.card__image}
          priority
        />
        <Heading level="2" align="left" color="darkGray">
          {name}
        </Heading>
        <Text color="darkGray">{description}</Text>
      </article>
    </Link>
  );
}
