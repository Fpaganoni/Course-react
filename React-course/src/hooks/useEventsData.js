import useEventsResults from "../state/events-results";

/* ESTE HOOK SE ENCARGA DE GUARDAR VALORES EN FORMA LOCAL  */
const useEventsData = () => {
  /* Llamamos desde el hook a los valores que necesitamos usar */
  const { data, isLoading, error, fetchEvents } = useEventsResults();

  /* MODIFICAMOS EL HOOK: usamos zustband y solo importamos el hook creado para centralizar la informacion */

  return {
    events: data?._embedded?.events || [],
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents,
  };
};

export default useEventsData;
