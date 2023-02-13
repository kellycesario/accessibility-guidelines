import styles from "./styles.module.scss";

export default function Label({ id, children, align, size, className }) {
  const classList = [styles.label];
  classList.push(styles[`label--${align}`]);
  classList.push(styles[`label--${size}`]);
  return (
    <label htmlFor={id} className={`${classList.join(" ")} ${className}`}>
      {children}
    </label>
  );
}
