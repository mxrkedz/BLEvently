import Link from 'next/link';
import React from 'react';
import styles from './css/footer.module.css';  // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles['container-md']}`}>
        <div className="flex items-center gap-2">
          <span className={styles.brand}>BLEvently</span>
        </div>
        <nav className={styles.nav}>
          
          <Link href="#" className={styles['nav-link']} prefetch={false}>
            Features
          </Link>
          <Link href="#" className={styles['nav-link']} prefetch={false}>
            About
          </Link>
          <Link href="#" className={styles['nav-link']} prefetch={false}>
            Contact
          </Link>
          <Link href="#" className={styles['nav-link']} prefetch={false}>
            Terms
          </Link>
          <Link href="#" className={styles['nav-link']} prefetch={false}>
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
