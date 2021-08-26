import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => (
  <header className={styles.grid}>
    <Link href="/">
      <a className={styles.card}>Home</a>
    </Link>

    <Link href="/about">
      <a className={styles.card}>About</a>
    </Link>
  </header>
);

export default Header;
