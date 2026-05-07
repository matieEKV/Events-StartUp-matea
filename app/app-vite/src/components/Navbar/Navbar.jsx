import styles from "./Navbar.module.css";
import { useFilterEvents } from "../../Hooks/FilterEvents.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";

export const Navbar = ({ onClick, isOnlyAvailable }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <img src="/src/shared/evenTeam.png" alt=""></img>
      </div>
      <nav className={styles.navbar}>
        <SearchBar />
      </nav>
    </header>
  );
};
