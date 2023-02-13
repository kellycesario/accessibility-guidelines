import Link from "next/link";
import styles from "./styles.module.scss";

export default function Button({
  children,
  className,
  color,
  href,
  isButton,
  onClick,
  size,
  reset,
  target
}) {
  const classList = [styles.button];
  classList.push(styles[`button--${color}`]);
  classList.push(styles[`button--${size}`]);

  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={reset ? className : `${classList.join(" ")} ${className}`}
        >
          {children}
        </button>
      ) : (
        <Link href={href} target={target} className={`${classList.join(" ")} ${className}`}>
          {children}
        </Link>
      )}
    </>
  );
}

