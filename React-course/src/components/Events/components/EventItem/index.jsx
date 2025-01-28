/* eslint-disable react/prop-types */

import styles from "./EventItem.module.css";
import hearth from "../../../../assets/heart.png";
import fillHearth from "../../../../assets/fillHeart.png";
import useLikeEvents from "../../../../hooks/useLikeEvents";

const EventItem = ({
  description,
  name,
  image,
  id,
  onEventClick,
  priceType,
  priceMin,
  priceMax,
  currency,
}) => {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id);
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const hanfleHearthClick = () => {
    toggleEventLike();
  };

  return (
    <div
      className={styles.eventContainer}
      onClick={() => console.log("clickeado")}
    >
      <figure className={styles.imgContainer}>
        <img
          onClick={hanfleHearthClick}
          className={styles.fillHearth}
          src={isEventLiked ? fillHearth : hearth}
          alt="hearth"
          width={25}
        />
        <img className={styles.eventImg} src={image} alt={name} />
      </figure>

      <div className={styles.infoContainer}>
        <h2 className={styles.eventTitle}>{name}</h2>
        <p className={styles.eventInfo}>{description}</p>
        {/* <table className={styles.pricesTable}>
          <caption className={styles.captionTable}>Price List</caption>
          <tr className={styles.trTable}>
            <td className={styles.tdTables}>Type:</td>
            <td className={styles.tdTables}>{priceType}</td>
          </tr>
          <tr className={styles.trTable}>
            <td className={styles.tdTables}>Min:</td>
            <td className={styles.tdTables}>
              {priceMin}
              {currency}
            </td>
          </tr>
          <tr className={styles.trTable}>
            <td className={styles.tdTables}>Max:</td>
            <td className={styles.tdTables}>
              {priceMax}
              {currency}
            </td>
          </tr>
        </table> */}
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
