import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={headerLogo} />
        </Link>
        <div className={styles.navbarRightItems}>
          <ul>
            <li>
              <Link to="/trends">
                <img src={fire} />
                <span>Trends</span>
              </Link>
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
            <a href="https://skriper.dev/create?new=true" target="_blank">
              <img src={sign} />
              <span>Start Coding</span>
            </a>
            <Link to="/login">
              <img src={login} />
              <span>Login</span>
            </Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
