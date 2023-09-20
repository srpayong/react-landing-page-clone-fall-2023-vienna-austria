import React from 'react';
import styles from './app.module.scss';
import logo from './logo.svg';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <header className={`${styles.nav} ${styles.navbarWrapper}`}>
              <nav className={styles.linksContainer}>
                <a href="/#" className={styles.logoLink}>
                  <img src="./images/Logo.svg" className={styles.img} />
                </a>
                <ul className={styles.nav}>
                  <li className={styles.baseButton}>
                    <a href="#signin">Pricing</a>
                  </li>
                  <li className={styles.baseButton}>
                    <a href="#signin">Work</a>
                  </li>
                  <li className={styles.baseButton}>
                    <a href="#signin">About Me</a>
                  </li>
                  <li className={styles.baseButton}>
                    <a href="#request-demo">FAQ's</a>
                  </li>
                  <li>
                    <div>
                      <a href="/#" className={styles.buttonBlack}>
                        Login
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </section>
        <section>
          <div className={styles.heroContent}>
            <h1>
              Unlimited Design
              <br />
              Subscription Service
            </h1>
            <p>
              A design-made-easy monthly subscription solution, tailored around
              your business needs. No fuss, no hassle, no messy contracts and no
              complicated pricing structure, just straight forward best-in-class
              design at a click of a button.
            </p>
          </div>
          <div className={styles.heroContent}>
            <a href="/#" className={styles.priceButton}>
              View pricing
            </a>
          </div>
        </section>
        <section>
          <div className={styles.imgStar}>
            <div className={styles.text}>
              <img src="./images/star.svg" />
              Pause or
              <br />
              cancel <br />
              anytime
              <br />
            </div>
          </div>
          <div className={styles.imgPurple}>
            <div className={styles.text}>
              <img src="./images/purplecircle.svg" />
              Fixed <br />
              monthly <br />
              price <br />
            </div>
          </div>
          <div className={styles.imgSun}>
            <div className={styles.text}>
              <img src="./images/sun.svg" />
              World <br />
              class <br />
              design <br />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <div>
            <a href="/#" className={styles.footerLogo}>
              <img src="./images/Logo.svg" className={styles.img} />Ⓒ 2023 My
              Design Buddy Ltd
            </a>
          </div>
        </div>
        <div></div>
        <ul className={styles.footerLi}>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </footer>
    </>
  );
}
