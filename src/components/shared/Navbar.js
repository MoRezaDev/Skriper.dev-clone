import React from "react";

//import styles...
import styles from "./Navbar.module.css";

//importing images...
import headerLogo from "../../images/logo-nav.svg";
import fire from "../../images/fire-nav.svg";
import star from "../../images/star-nav.svg";
import time from "../../images/time-nav.svg";
import sign from "../../images/startCoding-nav.svg";
import login from "../../images/login-nav.svg";
import search from "../../images/search-nav.svg";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.navbarContainer}>
        <img src={headerLogo} />
        <div className={styles.navbarRightItems}>
        <ul>
          <li>
            <a>
              <img src={fire} />
              <span>Trends</span>
            </a>
          </li>
          <li>
            <a>
              <img src={star} />
              <span>Featured</span>
            </a>
          </li>
          <li>
            <a>
              <img src={time} />
              <span>Lastest</span>
            </a>
          </li>
        </ul>
        <div className={styles.NavbarButtons}>
          <a>
            <img src={sign} />
            <span>Start Coding</span>
          </a>
          <a>
            <img src={login} />
            <span>Login</span>
          </a>
          <a>
            <img src={search} />
          </a>
        </div>
        </div>
       
      </div>
    </header>
  );
};

export default Navbar;
