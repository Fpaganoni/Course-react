import EventItem from "./components/EventItem";
import data from "../../data/events.json";

// colocamos la info que vamos a usar en una constante
const events = data._embedded.events;

const Events = () => {
  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}
    />
  ));

  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;
