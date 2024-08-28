import React from "react";
import styles from "./css/header.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles["container-md"]}`}>
        <Link
          href="#"
          className={`${styles.link} ${styles["nav-md"]}`}
          prefetch={false}
        >
          <span className={styles.brand}>BLEvently</span>
        </Link>
        <nav className={`${styles.nav} ${styles["nav-md"]}`}>
          <Link href="#" className={styles["nav-link"]} prefetch={false}>
            Home
          </Link>
          <Link href="#" className={styles["nav-link"]} prefetch={false}>
            Events
          </Link>
          <Link href="#" className={styles["nav-link"]} prefetch={false}>
            Discover
          </Link>
          <div className={`${styles.nav} ${styles["nav-md"]}`}>
            <Button size="small" variant="outlined" color="inherit">
              Connect Wallet
            </Button>
            {/* <Avatar
            sx={{ bgcolor: "white", width: 24, height: 24 }}
            alt="Guest"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
