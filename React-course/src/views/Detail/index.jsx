import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import x from "../../assets/icon-X.png";
import instagram from "../../assets//icon-instagram.png";
import telegram from "../../assets/icon-telegram.png";
import spotify from "../../assets/icon-spotify.png";
import youtube from "../../assets/icon-youtube.png";
import userImg from "../../assets/user.png";
import ticket from "../../assets/ticket.png";
import home from "../../assets/icon-home.png";
import Footer from "../../components/Footer";

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

  // FUNCTION TO FIND BEST IMG > 1000PX WIDTH

  const findBestImg = (images) => {
    if (!images || images.length === 0) return null;

    const bestImg = images.find((img) => img.width > 1100);

    return bestImg?.url || images[0]?.url;
  };

  /* RETURNING THE COMPONENT WITH INFO DETAILS OF SELECTED EVENT */

  return (
    <div className={styles.container}>
      <div className={styles.firstNavbar}>
        <Link to="/" className={styles.homeLink}>
          <img src={home} className={styles.homeImg} alt="home" />
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
          <img className={styles.socialIcons} src={instagram} alt="instagram" />
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

      <div className={styles.mainInfoContainer}>
        <span className={styles.titleImgContainer}>
          <h3 className={styles.infoTitle}>{eventData.name}</h3>
        </span>

        <img
          className={styles.imgInfo}
          src={findBestImg(eventData.images)}
          alt={eventData.name}
        />
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
          </div>

          <div className={styles.pricesTable}>
            <div className={styles.cardInsidesSeparators}>
              <h3 className={styles.cardInsidesTitle}>Event Details</h3>
            </div>

            <div className={styles.cardInsidesSeparators}>
              <p className={styles.standarPrice}>
                {eventData.classifications?.[0].genre?.name} -{" "}
                {eventData.classifications?.[0].subGenre?.name}
              </p>
              <p className={styles.standarPrice}>
                {eventData.priceRanges?.[0].type} tickets on sale from{" "}
              </p>
              <span className={styles.price}>
                {eventData?.priceRanges?.[0].min}{" "}
                {eventData?.priceRanges?.[0].currency}
              </span>
            </div>
            <button className={styles.buyButton}>Buy Tickets</button>
          </div>
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
      <Footer />
    </div>
  );
};

export default Detail;
