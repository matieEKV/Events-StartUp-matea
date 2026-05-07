import styles from "./SearchBar.module.css";
export const SearchBar = ({ query, handleSearchChange }) => {
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search events, cities..."
          value={query}
          onChange={handleSearchChange}
        />
        <span>&#128269;</span>
      </div>
    </>
  );
};
