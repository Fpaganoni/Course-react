import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./Profile.module.css";

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
        <Link to="/" className={styles.homeLink}>
          Inicio
        </Link>
      </div>

      <div className={styles.tabsContainer}>
        <span
          className={`${pathname.includes("my-info") ? styles.active : ""} ${
            styles.tab
          }`}
          onClick={() => handleTabClicks("my-info")}
        >
          Mi Información
        </span>
        <span
          className={`${
            pathname.includes("liked-events") ? styles.active : ""
          } ${styles.tab}`}
          onClick={() => handleTabClicks("liked-events")}
        >
          Eventos Favoritos
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
