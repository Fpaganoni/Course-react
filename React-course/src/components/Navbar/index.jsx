import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div>
      <h1>Mi boletera</h1>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
};

export default Navbar;
