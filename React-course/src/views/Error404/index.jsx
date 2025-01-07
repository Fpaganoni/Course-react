import styles from "./Error404.module.css";
import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Error {error.status} Opsss!</h1>
      <p className={styles.errorParagraph}>{error.data} </p>
    </div>
  );
};

export default Error404;
