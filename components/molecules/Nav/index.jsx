import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "@atoms/Logo";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState();

  const router = useRouter();

  const ToggleHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const CloseMenuHandler = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    let timeoutId = null;
    const updateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    };
    window.addEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (windowSize > 1024) {
      setIsMenuOpen(false);
    }
  }, [windowSize]);

  useEffect(() => {
    isMenuOpen
      ? (document.body.dataset.stuck = true)
      : (document.body.dataset.stuck = false);
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar} role="navigation">
      <Logo />
      <ul
        className={
          isMenuOpen
            ? `${styles.navbar__openList}`
            : `${styles.navbar__closedList}`
        }
      >
        <li className={styles.navbar__item}>
          <Link
            className={`${styles.navbar__link} ${
              router.pathname === '/' && styles['navbar__link--active']
            }`}
            href="/"
            onClick={CloseMenuHandler}
          >
            Home
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link
            className={`${styles.navbar__link} ${
              router.pathname === '/categories' &&
              styles['navbar__link--active']
            }`}
            href="/categories"
            onClick={CloseMenuHandler}
          >
            Categories
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link
            className={`${styles.navbar__link} ${
              router.pathname === '/tests' && styles['navbar__link--active']
            }`}
            href="/tests"
            onClick={CloseMenuHandler}
          >
            Tests
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link
            className={`${styles.navbar__link} ${
              router.pathname === '/get-in-touch' &&
              styles['navbar__link--active']
            }`}
            href="/get-in-touch"
            onClick={CloseMenuHandler}
          >
            Get in Touch
          </Link>
        </li>
      </ul>
      <button className={styles.navbar__menu} onClick={ToggleHandler} aria-label="toggle menu">
        <svg width="48" height="48">
          <use xlinkHref="#menu" href="#menu" />
        </svg>
      </button>
    </nav>
  );
}
