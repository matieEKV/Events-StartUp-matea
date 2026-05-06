import styles from "./FilterBar.module.css";

export const FilterBar = (onChange) => {
  return (
    <select onChange={onChange} className={styles.filterSelect}>
      <option value="default">All events</option>
      <option value="available">Available tickets</option>
    </select>
  );
};
