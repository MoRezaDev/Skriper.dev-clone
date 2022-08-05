import React from "react";

//styles...
import styles from "./Footer.module.css";

//import some images
import footerLogo from "../images/footerLogo.svg";
import twitter from "../images/twitterLogo-footer.svg";
import youtube from "../images/youtubeLogo-footer.svg";
import facebook from "../images/facebookLogo-footer.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <img src={footerLogo} />
          <div className={styles.footerSocialLogos}>
            <img src={twitter} />
            <img src={youtube} />
            <img src={facebook} />
          </div>
        </div>
        <div className={styles.footerMiddle}>
          <h2>LINK OF INTEREST</h2>
          <span>FAQ</span>
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Youtube</span>
        </div>
        <div className={styles.footerRight}>
          <span>Copyright Skriper.dev © 2022 </span>
          <span>Cloned by MoReza.Dev@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
