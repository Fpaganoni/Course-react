/* eslint-disable react/prop-types */
import useEventsData from "../../hooks/useEventsData";
import EventItem from "./components/EventItem";

// colocamos la info que vamos a usar en una constante

const Events = ({ searchTerm }) => {
  const { events, error, isLoading } = useEventsData();

  const handleEventItemClick = (id) => {
    console.log("Evento seleccionado", id);
  };

  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) => {
        return item.name.toLocaleLowerCase().includes(searchTerm);
      });
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return <div>{renderEvents()}</div>;
};

export default Events;
