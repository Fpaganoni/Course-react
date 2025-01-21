/* eslint-disable react/prop-types */

import EventItem from "./components/EventItem";
import styles from "./Events.module.css";
import { useNavigate } from "react-router-dom";
// Importamos MEMO, con la idea de que no se rerendereen los elementos si no cambia su estado, es una forma de optimizar la pagina,
// ya que si tenemos 3k elementos que se rerenderean es una carga a la memoria. Se usa cuando los componentes son pesados(como las listas)
import { memo } from "react";

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate();

  const handleEventItemClick = (id) => {
    navigate(`/detail/${id}`);
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

  return <div className={styles.eventsContainer}>{renderEvents()}</div>;
};

// cuando hacemos el export, usamos la funcion memo para guardar en memoria los eventos y que no se rerenderen si no cambia su estado o propiedades
export default memo(Events);
