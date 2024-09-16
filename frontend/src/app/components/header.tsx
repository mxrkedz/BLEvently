"use client";
import React from "react";
import styles from "./css/header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const currentPath = usePathname();

  const pages = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Discover", path: "/discover" },
  ];

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles["container-md"]}`}>
        <Link
          href="/"
          className={`${styles.link} ${styles["nav-md"]}`}
          prefetch={false}
        >
          <span className={styles.brand}>BLEvently</span>
        </Link>
        <nav className={`${styles.nav} ${styles["nav-md"]}`}>
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.path}
              className={`${styles["nav-link"]} ${
                isActive(page.path) ? styles["nav-link-active"] : ""
              }`}
              prefetch={false}
            >
              {page.name}
            </Link>
          ))}
          <div className={`${styles.nav} ${styles["nav-md"]}`}>
            <button className={styles.button}>Log in</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
