import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

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

  return (
    <div ref={ref} className={styles.navBarContainer}>
      <h1 className={styles.navbarTitle}>Mi Boletera</h1>
      <input
        className={styles.boleteraInput}
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />

      <Link className={styles.profileLink} to="/profile/my-info">
        Mi Perfil
      </Link>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
