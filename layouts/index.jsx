import Header from '@organisms/Header';
import Footer from '@organisms/Footer';
import styles from './styles.module.scss';
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Link href="#children" className={styles.layout__link}>Skip to main content</Link>
      <Header />
      <main id="children" className={styles.layout__children}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
