import React from "react";
import styles from "./css/eventCard.module.css";
import Image from "next/image";
const EventCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardimage}>
        <img
          className={styles.cardimage}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
          alt="Event Image"
        />
      </div>
      <div className={styles.eventName}> Event Name </div>
      <div className={styles.heading}>
        HEADING
        <div className={styles.author}>
          By <span className={styles.name}>AUTHOR</span>
        </div>
      </div>
    </div>
  );
};
// src="https://cbzncorp.com/wp-content/uploads/2021/07/CBZN-Logo-02-Horizontal-ColoredWhite.png"
export default EventCard;
