import { useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import styles from "./EventList.module.css";
import { useFetchData } from "../../Hooks/FetchQueries.jsx";
import { useFilterEvents } from "../../Hooks/FilterEvents.jsx";
import { FilterBar } from "../FilterBar/FilterBar.jsx";

// TODO: split each event below into its own EventCard component
// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList({ events }) {
  const { data, loading, error } = useFetchData("events");

  const { isOnlyAvailable, toggleEvents, filteredEvents } =
    useFilterEvents(data);

  return (
    <>
      <FilterBar onChange={toggleEvents} />
      <ul className={styles.cardsContainer}>
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            image={event.image}
            name={event.name}
            date={event.date}
            time={event.time}
            venue={event.venue}
            city={event.city}
            description={event.description}
            price={event.price}
            ticketsAvailable={event.ticketsAvailable}
            totalTickets={event.totalTickets}
            category={event.category}
          ></EventCard>
        ))}
      </ul>
    </>
  );
}
