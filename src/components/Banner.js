import React from "react";

//styles
import styles from "./Banner.module.css";

//import images...
import logo from "../images/logo-banner.svg";

//call API
import { images, CardsApi } from "../services/api";
import CardBanner from "./shared/CardBanner";

const Banner = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src={logo} />
        <div className={styles.gradientContainer}>
          <h1>The place where your ideas come true</h1>
        </div>
        <h2>The playground for developers with cool stuff</h2>
        <div className={styles.image1Banner}>
          <img src={images[0].url} />
        </div>
      </main>
      <section className={styles.contentSection}>
        <h3>
          Explore and experiment with HTML, JavaScript and CSS visualise your
          ideas and get instant feedback.
        </h3>
        <div className={styles.contentSectionInner}>
          <div>
            <h1>HTML</h1>
            <p>Write your html code fast and preview it in real time</p>
            <h1>CSS</h1>
            <p>
              Powerful css editor with autocomplete module and many tools as
              Gradients generator, colors utils and more...
            </p>
            <h1>JavaScript</h1>
            <p>
              Write cool js code quickly and get instant feedback in real time
              with our sandbox, you can run your code in the sandbox and get the
              result.
            </p>
          </div>
          <div className={styles.contentSectionInnerImage}>
            <img src={images[1].url} />
          </div>
        </div>
        <div className={styles.contentSectionCards}>
          {CardsApi.map((card, index) => {
            return <CardBanner key={index} Data={card} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Banner;
