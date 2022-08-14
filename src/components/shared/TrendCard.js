import React from "react";

//styles
import styles from "./TrendCard.module.css";
import level from "../../images/Level.svg";
import sharedIcon from "../../images/sharedIcon.svg";
import viewedIcon from "../../images/viewedIcon.svg";
import favIcon from "../../images/favIcon.svg";

const TrendCard = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <img src={posts.image} />
      </div>
      <div className={styles.cardContent}>
        <span>CODE</span>
        <p>Animation the button</p>
      </div>
      <div className={styles.cardAuthor}>
        <img src={level} style={{ width: "30px", height: "30px" }} />
        <span>Kevin Wilian</span>
      </div>
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardDetails}>
          <div className={styles.cardDetailsItem}>
            <img src={sharedIcon} />
            <span>0</span>
          </div>
          <div className={styles.cardDetailsItem}>
            <img src={viewedIcon} />
            <span>1</span>
          </div>
          <div className={styles.cardDetailsItem}>
            <img src={favIcon} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
