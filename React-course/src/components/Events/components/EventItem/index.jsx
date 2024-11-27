// eslint-disable-next-line react/prop-types
const EventItem = ({ info, name, image, id, onEventClick }) => {
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className="event_container" onClick={() => console.log("clickeado")}>
      <img className="event_img" src={image} alt={name} />
      <h2 className="event_title">{name}</h2>
      <p className="event_info">{info}</p>
      <button onClick={handleSeeMoreClick}>Ver más</button>
    </div>
  );
};

export default EventItem;
