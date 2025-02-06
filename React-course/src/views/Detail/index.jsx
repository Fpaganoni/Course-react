import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { format } from "date-fns";

import { Link } from "react-router-dom";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${
            import.meta.env.VITE_TICKETMASTER_API_KEY
          }`
        );
        const data = await response.json();

        setEventData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setEventData({});
        setError(error);
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (isLoading && Object.keys(eventData) === 0) {
    return <div>Loading...</div>;
  }

  if (Object.keys(error) > 0) {
    return <div>Ha Ocurrido un error</div>;
  }

  /* RETURNING THE COMPONENT WITH INFO DETAILS OF SELECTED EVENT */

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        Inicio
      </Link>
      <div className={styles.mainInfoContainer}>
        <span className={styles.titleImgContainer}>
          <h3 className={styles.infoTitle}>{eventData.name}</h3>
        </span>

        <img
          className={styles.imgInfo}
          src={eventData.images?.[0].url}
          alt={eventData.name}
        />

        {/* <p className={styles.infoText}>{eventData.info}</p> */}
      </div>

      <div className={styles.seatInfoContainer}>
        <section className={styles.pricesContainer}>
          <div className={styles.cardDetailsDate}>
            <div className={styles.dateDetails}>
              <p className={styles.cardDetailsInfoDayHour}>
                {eventData.dates?.start?.dateTime
                  ? format(new Date(eventData.dates.start.dateTime), "d MMM")
                  : "Fecha no disponible"}
              </p>

              <p className={styles.cardDetailsInfoDate}>
                {/* Taking de date of each event and using "format" to show it.
            use optional chaning '?' to avoid errors when we call the api */}
                {eventData.dates?.start?.dateTime
                  ? format(new Date(eventData.dates.start.dateTime), "EEE - p")
                  : "Fecha no disponible"}
              </p>
            </div>
            <div className={styles.locationAndTicketsDetails}>
              <h3 className={styles.titleDetails}>{eventData.name}</h3>
              <p className={styles.detailsAddress}>
                {eventData?._embedded?.venues?.[0].address?.line1}
              </p>
              <small className={styles.detailsTicketsLimit}>
                {eventData?.ticketLimit?.info}
              </small>
            </div>
            <button className={styles.buyButton}>Buy Tickets</button>
          </div>

          <table className={styles.pricesTable}>
            <caption className={styles.captionTable}>
              {eventData.priceRanges?.[0].type} tickets on sale from
            </caption>

            <tr className={styles.trTable}>
              <td className={styles.tdTables}>Min:</td>
              <td className={styles.tdTables}>
                {eventData?.priceRanges?.[0].min}
                {eventData?.priceRanges?.[0].currency}
              </td>
            </tr>
            <tr className={styles.trTable}>
              <td className={styles.tdTables}>Max:</td>
              <td className={styles.tdTables}>
                {eventData.priceRanges?.[0].max}
                {eventData?.priceRanges?.[0].currency}
              </td>
            </tr>
          </table>
        </section>

        <figure className={styles.seatMapImgContainer}>
          {/* Same thing as above, optional chaining to show seat maps if there are */}
          <img
            className={styles.seatMapImg}
            src={
              eventData?.seatmap?.staticUrl
                ? eventData.seatmap.staticUrl
                : "Mapa no disponible"
            }
            alt="seat mapa Event"
          />
        </figure>
        <p className={styles.seatMapParagraph}>{eventData.pleaseNote}</p>
      </div>
    </div>
  );
};

export default Detail;
