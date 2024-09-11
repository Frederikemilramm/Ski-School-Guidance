import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ski School Guidance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Ski School Guidance</div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#home" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/schools" className={styles.navLink}>
                Schools
              </a>
            </li>
            <li>
              <a href="/about" className={styles.navLink}>
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home" className={styles.hero}>
        <video autoPlay muted loop className={styles.bgVideo}>
          <source
            src="/190404_04_KaninBovec_Drone_003.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroContent}>
          <h1>Find Your Perfect Ski School</h1>
          <p>Your journey to mastering the slopes begins here.</p>
          <a href="/schools" className={styles.btn}>
            Discover Schools
          </a>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll Down</span>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Contact Us</h2>
        <form id="contactForm" className={styles.contactForm}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
        <div id="formMessage" style={{ display: 'none' }}></div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Ski School Guidance. All rights reserved.</p>
      </footer>
    </div>
  );
}
