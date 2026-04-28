import styles from "./Navbar.module.css";

export const Navbar = ({ onClick, isOnlyAvailable }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navbarLogo}>
        <img src="/src/shared/evenTeam.png" alt=""></img>
      </div>
      <nav className={styles.navbar}>
        <button className={styles.filterTicketsButton} onClick={onClick}>
          {isOnlyAvailable ? "Show all" : "Show Available Tickets Only"}
        </button>
      </nav>
    </header>
  );
};
