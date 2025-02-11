import styles from "./Footer.module.css";
import EEUUFlag from "../../assets/united-states-flag.png";
import x from "../../assets/icon-X.png";
import instagram from "../../assets//icon-instagram.png";
import telegram from "../../assets/icon-telegram.png";
import spotify from "../../assets/icon-spotify.png";
import youtube from "../../assets/icon-youtube.png";

const Footer = () => {
  return (
    <div className={styles.generalContainer}>
      <footer className={styles.footerContainer}>
        <section className={styles.footerSections}>
          <h2 className={styles.footerCoinTitle}>
            <figure className={styles.imgContainer}>
              <img src={EEUUFlag} alt="United States Flag" />
            </figure>
            United States
          </h2>
          <p className={styles.footerCoinParagraph}>
            Hellotickets makes booking tours and activities worldwide easy and
            hassle-free.
          </p>
          <p className={styles.companyInfo}>© Hello Ticket, SL.</p>
        </section>
        <section className={styles.footerSections}>
          <h2 className={styles.sectionTitles}>Company</h2>
          <ul className={styles.footerList}>
            <li className={styles.companyList}>About Us</li>
            <li className={styles.companyList}>Careers</li>
            <li className={styles.companyList}>Affiliates</li>
            <li className={styles.companyList}>Reviews</li>
            <li className={styles.companyList}>Privacy</li>
            <li className={styles.companyList}>Terms And Conditions</li>
            <li className={styles.companyList}>Legal Notice</li>
            <li className={styles.companyList}>Cookies</li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h2 className={styles.sectionTitles}>Cities</h2>
          <ul className={styles.footerList}>
            <li className={styles.citiesList}>New York</li>
            <li className={styles.citiesList}>Rome</li>
            <li className={styles.citiesList}>Paris</li>
            <li className={styles.citiesList}>London</li>
            <li className={styles.citiesList}>Granada</li>
            <li className={styles.citiesList}>Krakow</li>
            <li className={styles.citiesList}>Tenerife</li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h2 className={styles.sectionTitles}>Help</h2>
          <ul className={styles.footerList}>
            <li className={styles.helpList}>Help</li>
            <li className={styles.helpList}>Contact Us</li>
          </ul>
        </section>
        <section className={styles.footerSections}>
          <h2 className={styles.sectionTitles}>Join us on</h2>
          <img src={x} alt="icono de X" className={styles.socialIcons} />
          <img
            src={instagram}
            alt="icono de  instagram"
            className={styles.socialIcons}
          />
          <img
            src={spotify}
            alt="icono de Spotify"
            className={styles.socialIcons}
          />
          <img
            src={youtube}
            alt="icono de youtube"
            className={styles.socialIcons}
          />
          <img
            src={telegram}
            alt="icono de telegram"
            className={styles.socialIcons}
          />
        </section>
      </footer>
    </div>
  );
};

export default Footer;
