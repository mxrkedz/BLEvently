"use client";

import React from "react";
import styles from "./css/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div>
        <h3 className={styles.heading}>
          Build
          <br />
          Legendary
          <br />
          Events!
        </h3>
        <p className={styles.paragraph}>
          BLEvently makes it easy to plan, promote, and manage your events.
          Start creating your next event today.
        </p>
        <button
          className={styles.button}
          onClick={() => (window.location.href = "/create-event")}
        >
          Get Started!
        </button>
      </div>
    </section>
  );
};

export default Hero;
