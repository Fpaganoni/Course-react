/* eslint-disable react/prop-types */

import styles from "./EventItem.module.css";

const EventItem = ({ info, name, image, id, onEventClick }) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div
      className={styles.eventContainer}
      onClick={() => console.log("clickeado")}
    >
      <img className={styles.eventImg} src={image} alt={name} />
      <div className={styles.infoContainer}>
        <h2 className={styles.eventTitle}>{name}</h2>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          Ver más
        </button>
      </div>
    </div>
  );
};

export default EventItem;
