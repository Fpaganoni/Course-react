import { useEffect, useState } from "react";

const useEventsData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    /* Llamamos a la api que creamos en postman */
    /* sustituimos el archivo JSON por una llamada a la api que creamos en postman */
    const fetchEvents = async () => {
      const link =
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=IA0obJJcbHaAUtgnDsQOMvEK5TTr4No1&countryCode=US";

      try {
        const response = await fetch(link);
        const data = await response.json();
        console.log(data);
        setData(data);

        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  return {
    events: data?._embedded?.events || [],
    isLoading,
    error,
  };
};

export default useEventsData;
