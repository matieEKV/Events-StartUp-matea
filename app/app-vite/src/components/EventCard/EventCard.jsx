import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";
import { useCardContext } from "../../context/CardContext.jsx";

export const EventCard = ({ event }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [hover, setHover] = useState(false);

  const { addTicketToOrder } = useCardContext();

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="5" y="4" width="15" height="15" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="5" y1="10" x2="18" y2="10"></line>
                </svg>
                <span>{event.date}</span>
              </p>
              <p className={styles.dateTimeWithin}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{event.time}</span>
              </p>
            </div>
            <div className={styles.eventLocation}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div className={styles.dtColumn}>
                <span>{event.venue}</span>
                <span>{event.city}</span>
              </div>
            </div>

            <div className={styles.ticketStatus}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />

                <path d="M13 5v2" />
                <path d="M13 11v2" />
                <path d="M13 17v2" />
              </svg>
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
      {hover && event.ticketsAvailable > 0 && (
        <button className={styles.cartButton} onClick={addToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
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
