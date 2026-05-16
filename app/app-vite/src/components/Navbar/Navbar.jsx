import styles from "./Navbar.module.css";
import { useFilterEvents } from "../../Hooks/FilterEvents.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { useSearchParams } from "react-router-dom";
import LoginIcon from "../LoginIcon/LoginIcon.jsx";
import { Cart } from "../Cart/Cart.jsx";
import { Logo } from "../Logo/Logo.jsx";

export const Navbar = ({ onClick, isOnlyAvailable }) => {
  //search bar
  const [searchParams, setSearchParams] = useSearchParams();

  let query = searchParams.get("q") || "";

  function handleSearchChange(e) {
    setSearchParams({ q: e.target.value });
  }

  return (
    <header className={styles.headerContainer}>
      <Logo />

      <SearchBar query={query} onChange={handleSearchChange} />
      <nav className={styles.navbar}>
        <LoginIcon />
        <Cart />
      </nav>
    </header>
  );
};
