import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import useEventsResults from "../../state/events-results";

const Home = () => {
  const { data, error, isLoading, fetchEvents } = useEventsResults();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const fetchMyEvents = useRef();

  //importamos useMemo para optimizar el rerendereo, y asi, el componente se rerenderea si y solo si 'data?._embedded?.events' cambia o se modifica
  // useMemo es para calculos como el calculo de la constante de abajo
  const events = useMemo(
    () => data?._embedded?.events || [],
    [data?._embedded?.events]
  );
  const page = data?.page || {};

  fetchMyEvents.current = fetchEvents;

  useEffect(() => {
    fetchMyEvents.current();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  //Importamos y usamos useCallback, para no recrear funciones a menos que algunas de sus propiedades cambien, que son las dependencias que les pasamos en el array
  // useCalback es para funciones
  const handlePageClick = useCallback(
    ({ selected }) => {
      fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
    },
    [fetchEvents, searchTerm]
  );

  const renderEvents = () => {
    if (isLoading) {
      return <div>Loading . . .</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />

        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.prev}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <div>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </div>
  );
};

export default Home;
