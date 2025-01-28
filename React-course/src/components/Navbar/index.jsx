import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import ticket from "../../assets/ticket.png";
import seeker from "../../assets/search.png";
import x from "../../assets/icon-X.png";
import instagram from "../../assets//icon-instagram.png";
import telegram from "../../assets/icon-telegram.png";
import spotify from "../../assets/icon-spotify.png";
import youtube from "../../assets/icon-youtube.png";
import userImg from "../../assets/user.png";

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div ref={ref} className={styles.navBarContainer}>
      <div className={styles.firstNavbar}>
        <Link className={styles.profileLink} to="/profile/my-info">
          <img
            className={styles.userImg}
            src={userImg}
            width={25}
            height={25}
          ></img>
          Mi Profile
        </Link>

        <div className={styles.socials}>
          <img className={styles.socialIcons} src={instagram} alt="instagram" />
          <img className={styles.socialIcons} src={x} alt="X" />
          <img className={styles.socialIcons} src={telegram} alt="telegram" />
          <img
            className={styles.socialIconYT}
            src={youtube}
            alt="youtube"
            width={30}
          />
          <img className={styles.socialIcons} src={spotify} alt="spotify" />

          <figure className={styles.ticketContainer}>
            <img
              className={styles.ticketImg}
              src={ticket}
              alt="ticket"
              width={70}
              height={70}
            />
          </figure>
        </div>
      </div>

      <div className={styles.secondNavbar}>
        <div className={styles.inputContainer}>
          <img
            className={styles.seeker}
            src={seeker}
            alt="searcher"
            width={30}
            height={30}
          />
          <input
            className={styles.boleteraInput}
            placeholder="Search for your favorite event, venues or artists."
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            value={search}
          />
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
