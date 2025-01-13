import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";

import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import useEventsResults from "../../state/events-results";

const Home = () => {
  const { data, error, isLoading, fetchEvents } = useEventsResults();
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  const events = data?._embedded?.events || [];
  const page = data?.page || {};

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

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
