import styles from "./Pagination.module.css";

export const Pagination = ({ totalEvents, eventsPerPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className={styles.pageButtons}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
