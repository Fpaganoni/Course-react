import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Events from "../../components/Events";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();
  useEffect(() => {
    console.log("useEfecct");
  }, []);
  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
