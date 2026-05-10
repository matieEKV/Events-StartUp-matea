import { useState } from "react";
import { EventCard } from "../EventCard/EventCard.jsx";
import styles from "./EventList.module.css";

// TODO: split each event below into its own EventCard component
// TODO: add a "Buy ticket" button to each event card
// TODO: replace the mock data import with a fetch call to GET /events

export default function EventList({ events }) {
  return (
    <ul className={styles.cardsContainer}>
      {events.map((event) => (
        <EventCard
          key={event.id}
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
  );
}
