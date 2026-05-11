import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";

export const EventCard = ({ event }) => {
  const [isShowing, setIsShowing] = useState(false);

  const ticketStatus =
    event.ticketsAvailable === 0
      ? "Sold out"
      : `${event.ticketsAvailable} tickets left`;

  const priceStatus = event.price === 0 ? "Free" : `€${event.price}`;
  function toggleSection() {
    setIsShowing(!isShowing);
  }

  return (
    <div className={styles.eventCard}>
      <Link to={`/events/${event.id}`} className={styles.link}>
        <img
          className={styles.eventImage}
          src={event.image}
          alt="conference event"
        />
        <section className={styles.infoContainer}>
          <section className={styles.eventInfo}>
            <p className={styles.label}>
              <strong>Title</strong>
            </p>
            <p className={styles.eventTitle}>{event.name}</p>
            <p className={styles.label}>
              <strong>Date | Time</strong>
            </p>
            <div className={styles.dateTime}>
              <span>{event.date}</span>
              <span>{event.time}</span>
            </div>

            <p className={styles.label}>
              <strong>Location</strong>
            </p>
            <div className={styles.eventLocation}>
              <span>{event.venue}</span>
              <span>{event.city}</span>
            </div>
            {isShowing && (
              <>
                <p className={styles.label}>
                  <strong>Description</strong>
                </p>
                <p className={styles.eventDescription}>{description}</p>
                <p className={styles.label}>
                  <strong>Price</strong>
                </p>
                <p className={styles.price}>{priceStatus}</p>
                <p className={styles.label}>
                  <strong>Tickets Available</strong>
                </p>
                <p className={styles.tickets}>{ticketStatus}</p>
                <p className={styles.label}>
                  <strong>Total Tickets</strong>
                </p>
                <p className={styles.tickets}>{event.totalTickets}</p>
                <p className={styles.label}>
                  <strong>Category</strong>
                </p>
                <p className={styles.category}>{event.category}</p>
              </>
            )}
          </section>
        </section>
      </Link>
      <button className={styles.toggleButton} onClick={toggleSection}>
        {isShowing ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
