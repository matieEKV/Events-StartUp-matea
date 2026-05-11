import { useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import styles from "./EventList.module.css";
import { useFetchData } from "../../Hooks/FetchQueries.jsx";
import { useFilterEvents } from "../../Hooks/FilterEvents.jsx";
import { FilterBar } from "../FilterBar/FilterBar.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import { useSearchParams } from "react-router-dom";

// TODO: split each event below into its own EventCard component
// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList({ events }) {
  //search
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, loading, error } = useFetchData(`events?q=${query}`);
  //filtering
  const { isOnlyAvailable, toggleEvents, filteredEvents } =
    useFilterEvents(data);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage, setEventsPerPage] = useState(5);

  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvents = filteredEvents.slice(firstEventIndex, lastEventIndex);

  //errors
  if (loading) return <p className={styles.status}>Searching for events...</p>;

  if (error)
    return <p className={styles.status}>Something went wrong: {error}</p>;

  if (data && data.length === 0) {
    return (
      <div className={styles.noResults}>
        <h3>No events found for "{query}"</h3>
        <p>Try searching for a different event.</p>
      </div>
    );
  }

  return (
    <>
      <FilterBar onChange={toggleEvents} />
      <ul className={styles.cardsContainer}>
        {currentEvents.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </ul>
      <div className={styles.pageButtonsContainer}>
        <Pagination
          totalEvents={filteredEvents.length}
          eventsPerPage={eventsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
