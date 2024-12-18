import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  useEffect(() => {
    console.log("useEfecct");
  }, []);

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current.setSearch(" "));

    setSearchTerm(term);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
