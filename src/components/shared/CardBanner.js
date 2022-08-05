import React from "react";

//styles
import styles from "./CardBanner.module.css";

const CardBanner = ({ Data }) => {
  const { image, title, content } = Data;
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <img src={image} />
      </div>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardBanner;
