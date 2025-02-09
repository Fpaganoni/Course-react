import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./Profile.module.css";
import home from "../../assets/icon-home.png";
import x from "../../assets/icon-X.png";
import instagram from "../../assets//icon-instagram.png";
import telegram from "../../assets/icon-telegram.png";
import spotify from "../../assets/icon-spotify.png";
import youtube from "../../assets/icon-youtube.png";
import userImg from "../../assets/user.png";
import ticket from "../../assets/ticket.png";

const Profile = () => {
  // useLocation de react-router nos ayuda con los tags
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();

  const handleTabClicks = (path) => {
    navigate(`/profile/${path}`);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.linkContainer}>
        <div className={styles.firstNavbar}>
          <Link to="/" className={styles.homeLink}>
            <img
              src={home}
              className={styles.homeImg}
              alt="home"
              width={25}
              height={25}
            />
            Home
          </Link>
          <Link className={styles.profileLink} to="/profile/my-info">
            <img
              className={styles.userImg}
              src={userImg}
              width={25}
              height={25}
            ></img>
            My Account
          </Link>

          <div className={styles.socials}>
            <img
              className={styles.socialIcons}
              src={instagram}
              alt="instagram"
            />
            <img className={styles.socialIcons} src={x} alt="X" />
            <img className={styles.socialIcons} src={telegram} alt="telegram" />
            <img className={styles.socialIcons} src={spotify} alt="spotify" />
            <img
              className={styles.socialIconYT}
              src={youtube}
              alt="youtube"
              width={30}
            />

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
      </div>

      <div className={styles.tabsContainer}>
        <span
          className={`${pathname.includes("my-info") ? styles.active : ""} ${
            styles.tab
          }`}
          onClick={() => handleTabClicks("my-info")}
        >
          My Info
        </span>
        <span
          className={`${
            pathname.includes("liked-events") ? styles.active : ""
          } ${styles.tab}`}
          onClick={() => handleTabClicks("liked-events")}
        >
          Favourite Events
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
