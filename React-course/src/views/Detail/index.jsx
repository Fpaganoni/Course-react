import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Detail = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=IA0obJJcbHaAUtgnDsQOMvEK5TTr4No1`
        );
        const data = await response.json();

        setEventData(data);
        setIsLoading(false);
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
  console.log(eventData, "events");

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <h3 className={styles.infoTitle}>{eventData.name}</h3>
        <figure className={styles.imgContainerInfo}>
          <img
            className={styles.imgInfo}
            src={eventData.images?.[0].url}
            alt={eventData.name}
          />
        </figure>
        <p className={styles.infoText}>{eventData.info}</p>

        {
          <p className={styles.infoDate}>
            {eventData.dates?.start?.dateTime
              ? format(
                  new Date(eventData.dates.start.dateTime),
                  "d LLLL yyyy - H:mm",
                  { locale: es }
                )
              : "Fecha no disponible"}
            Hrs
          </p>
        }
      </div>
      <div className={styles.seatInfoContainer}>
        <h4 className={styles.seatMapTitle}>Mapa del evento</h4>
        <figure className={styles.seatMapImgContainer}>
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

    /* ENCONTRAR EL ERROR DE PORQUE NO RECONOCE EL "START" EN LA LLAMADA A LA
        API = LO SOLUCIONE USANDO EL OPTIONAL CHAINING, "?" SI SE ENCUENTRA EN LA LLAMADA A LA API LOS RESULTADOS SE MUESTRAN, DE LO CONTRARIO MUESTAR DATA NO AVAILABLE. */
  );
};

export default Detail;
