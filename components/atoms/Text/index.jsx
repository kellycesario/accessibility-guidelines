import styles from './styles.module.scss';

export default function Text({ children, color, className, weight, size }) {
  const classList = [styles.text];
  classList.push(styles[`text--${color}`]);
  classList.push(styles[`text--${weight}`]);
  classList.push(styles[`text--${size}`]);
  return (
    <p tabIndex="0" className={`${classList.join(' ')} ${className}`}>
      {children}
    </p>
  );
}
