import { createElement } from 'react';
import styles from './styles.module.scss';

export default function Heading({ level, children, align, weight, color }) {
  const classList = [styles.headings];
  classList.push(styles[`headings--H${level}`]);
  classList.push(styles[`headings--${align}`]);
  classList.push(styles[`headings--${weight}`]);
  classList.push(styles[`headings--${color}`]);

  const props = { className: classList.join(' '), tabIndex: 0 };
  const element = createElement('h' + level, props, children);

  return element;
}
