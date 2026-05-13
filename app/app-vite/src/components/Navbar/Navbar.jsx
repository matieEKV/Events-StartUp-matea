import styles from "./Navbar.module.css";
import { useFilterEvents } from "../../Hooks/FilterEvents.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { useSearchParams } from "react-router-dom";
import LoginIcon from "../LoginIcon/LoginIcon.jsx";

export const Navbar = ({ onClick, isOnlyAvailable }) => {
  //search bar
  const [searchParams, setSearchParams] = useSearchParams();

  let query = searchParams.get("q") || "";

  function handleSearchChange(e) {
    setSearchParams({ q: e.target.value });
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <img src="/src/shared/evenTeam.png" alt=""></img>
      </div>
      <nav className={styles.navbar}>
        <SearchBar query={query} onChange={handleSearchChange} />
        <LoginIcon />
      </nav>
    </header>
  );
};
