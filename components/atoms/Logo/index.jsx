import styles from "./styles.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <svg style={{ width: "5rem", height: "5rem" }}>
        <use xlinkHref="#logo" href="#logo" />
      </svg>
      <span>A11Y</span>
    </Link>
  );
}
