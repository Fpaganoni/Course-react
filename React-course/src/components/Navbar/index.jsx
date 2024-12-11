import { useState, useRef, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");
  const containerRef = useRef();

  useImperativeHandle(ref, () => ({
    search,
    setSearch,
  }));

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };

  console.log(containerRef);

  return (
    <div ref={ref}>
      <h1>Mi boletera</h1>
      <input
        className="boletera-input"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
