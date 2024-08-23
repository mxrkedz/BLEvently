import Button from "@mui/material/Button";
import React from "react";
import styles from "./css/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div>
        <h3 className={styles.heading}>Create Unforgettable Events!</h3>
        <p className={styles.paragraph}>
          BLEvently makes it easy to plan, promote, and manage your events.
          Start creating your next event today.
        </p>
        <Button size="large" variant="outlined" color="inherit">
          Get Started!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
