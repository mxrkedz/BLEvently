import React from "react";
import styles from "./css/featuredEvents.module.css";
import EventCard from "./eventCard";

const FeaturedEvents = () => {
  return (
    <section className={styles.section2}>
      <section className={styles.section}>
        <div>
          <h3 className={styles.heading}>Featured Events</h3>
          <p className={styles.paragraph}>
            BLEvently makes it easy to plan, promote, and manage your events.
            Start creating your next event today.
          </p>
        </div>
        <div className={styles.eventcards}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </section>
  );
};

export default FeaturedEvents;
