import Button from "@mui/material/Button";
import React from "react";
import styles from "./css/hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Create Unforgettable Events</h1>
        <p className={styles.heroDescription}>
          Evently makes it easy to plan, promote, and manage your events. Start
          creating your next event today.
        </p>
        <Button variant="contained" color="inherit" sx={{ color: "black" }}>
          Get Started
        </Button>
        <Link href="#" className={styles["learn-more"]} prefetch={false}>
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
