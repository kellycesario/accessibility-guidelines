import Button from "@atoms/Button";
import styles from "./styles.module.scss";

export default function ToggleView({ mode, toggleViewType }) {
  return (
    <div className={styles.viewType}>
      <Button
        reset
        isButton
        onClick={(e) => toggleViewType(e, "list")}
        className={
          mode === "list"
            ? styles.viewType__button + " " + styles["viewType__button--active"]
            : styles.viewType__button
        }
      >
        <svg style={{ width: "5rem", height: "5rem" }}>
          <use
            xlinkHref="#list"
            href="#list"
            className={mode === "list" ? styles["list--active"] : styles.list}
          />
        </svg>
        List View
      </Button>
      <Button
        reset
        isButton
        onClick={(e) => toggleViewType(e, "grid")}
        className={
          mode === "grid"
            ? styles.viewType__button + " " + styles["viewType__button--active"]
            : styles.viewType__button
        }
      >
        <svg style={{ width: "5rem", height: "5rem" }}>
          <use
            xlinkHref="#grid"
            href="#grid"
            className={mode === "grid" ? styles["grid--active"] : styles.grid}
          />
        </svg>
        Grid View
      </Button>
    </div>
  );
}
