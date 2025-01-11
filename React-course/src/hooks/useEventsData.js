import { useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  /* Llamamos a la api que creamos en postman */
  /* sustituimos el archivo JSON por una llamada a la api que creamos en postman */
  const fetchEvents = async (params) => {
    const link = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=IA0obJJcbHaAUtgnDsQOMvEK5TTr4No1&countryCode=MX${
      params?.length ? params : ""
    }`;

    try {
      const response = await fetch(link);
      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
