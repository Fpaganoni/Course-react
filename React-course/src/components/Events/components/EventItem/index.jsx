const EventItem = ({ info, name, image }) => {
  return (
    <div className="event_container">
      <img
        className="event_img"
        src={image}
        alt={name}
        width={350}
        height={250}
      />
      <h2 className="event_title">{name}</h2>
      <p className="event_info">{info}</p>
    </div>
  );
};

export default EventItem;
