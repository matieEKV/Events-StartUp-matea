import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";
import { useCardContext } from "../../context/CardContext.jsx";

export const EventCard = ({ event }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [hover, setHover] = useState(false);

  const { addTicketToOrder } = useCardContext();
  const cardTickets = event.ticketsAvailable;

  const [ticketsLeft, setTicketsLeft] = useState(event.ticketsAvailable);
  const ticketStatus =
    event.ticketsAvailable === 0
      ? "Sold out"
      : `${event.ticketsAvailable} tickets left`;

  const priceStatus = event.price === 0 ? "Free" : `€${event.price}`;
  function toggleSection() {
    setIsShowing(!isShowing);
  }
  //show cart icon on hover, hide on leave
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const addToCart = (e) => {
    e.stopPropagation();
    const ticketNumber = 1;
    addTicketToOrder(
      event.image,
      event.name,
      event.date,
      event.time,
      event.price,
      ticketNumber,
      event.price * ticketNumber,
    );
    setTicketsLeft((prev) => prev - 1);
  };

  return (
    <div
      className={styles.eventCard}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link to={`/events/${event.id}`} className={styles.link}>
        <img
          className={styles.eventImage}
          src={event.image}
          alt="conference event"
        />
        <section className={styles.infoContainer}>
          <section className={styles.eventInfo}>
            <p className={styles.eventTitle}>
              <strong>{event.name}</strong>
            </p>
            <div className={styles.dateTime}>
              <p className={styles.dateTimeWithin}>
                <i className="fa-regular fa-calendar"></i>
                <span>{event.date}</span>
              </p>
              <p className={styles.dateTimeWithin}>
                <i className="fa-regular fa-clock"></i>
                <span>{event.time}</span>
              </p>
            </div>
            <div className={styles.eventLocation}>
              <i className="fa-solid fa-location-dot"></i>
              <div className={styles.dtColumn}>
                <span>{event.venue}</span>
                <span>{event.city}</span>
              </div>
            </div>

            <div className={styles.ticketStatus}>
              <i className="fa-solid fa-ticket"></i>
              <span>{ticketStatus}</span>
            </div>

            {/* {isShowing && (
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
            )} */}
          </section>
        </section>
      </Link>
      {hover && (
        <button
          className={styles.cartButton}
          onClick={addToCart}
          disabled={event.ticketsAvailable === 0 || ticketsLeft === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 2 6 h 4 l 3 9 h 8 l 3 -9 h -14" />
            <circle cx="9" cy="18" r="1.5" />
            <circle cx="17" cy="18" r="1.5" />
          </svg>
        </button>
      )}
      {/* <button className={styles.toggleButton} onClick={toggleSection}>
        {isShowing ? "Show less" : "Show more"}
      </button> */}
    </div>
  );
};
