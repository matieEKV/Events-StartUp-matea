// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

import { EventCard } from "../EventCard/EventCard.jsx";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../../Hooks/FetchQueries.jsx";
import styles from "./EventDetail.module.css";
import { useState } from "react";
import { useCardContext } from "../../context/CardContext.jsx";

export default function EventDetail() {
  const { id } = useParams();
  const { addTicketToOrder } = useCardContext();
  const { data, loading, error } = useFetchData(`events/${id}`);
  const [ticketNumber, setTicketNumber] = useState(0);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No events found.</p>;

  function handleIncrement() {
    if (ticketNumber < data.ticketsAvailable) {
      setTicketNumber((prev) => prev + 1);
    }
  }
  function handleDecrement() {
    if (ticketNumber > 0) {
      setTicketNumber((prev) => prev - 1);
    }
  }

  const ticketStatus =
    data.ticketsAvailable === 0
      ? "Sold out"
      : `${data.ticketsAvailable} tickets left`;

  function handleBuyTickets() {
    addTicketToOrder(
      data.image,
      data.name,
      data.date,
      data.time,
      data.price,
      ticketNumber,
      data.price * ticketNumber,
    );
    setTicketNumber(0);
  }
  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageBlock}>
        <div className={styles.blackBoxR}>
          <div className={styles.shortInfo}>
            <div className={styles.linkContainer}>
              <Link to="/events" className={styles.backButton}>
                ← Back to all events
              </Link>
            </div>
            <h3 className={styles.heading}>{data.name}</h3>
            <p className={styles.info}>
              {data.city} | {data.venue}
            </p>
            <p className={styles.info}>{data.date}</p>
          </div>
        </div>
        <img src={data.image} alt={data.name}></img>
        <div className={styles.blackBoxL}></div>
      </div>

      <div className={styles.description}>
        <p>
          <span className={styles.legend}>DESCRIPTION</span>
          <span className={styles.descInfo}>{data.description}</span>
        </p>
        <p>
          <span className={styles.legend}>CATEGORY</span>
          <span className={styles.descInfo}>{data.category}</span>
        </p>
        <p>
          <span className={styles.legend}>PRICE</span>
          <span className={styles.descInfo}>
            {data.price === 0 ? "FREE" : data.price} DKK
          </span>
        </p>
        <div className={styles.tickets}>
          <p>
            <span className={styles.legend}>AVAILABLE TICKETS</span>
            <span className={styles.descInfo}>{ticketStatus}</span>
          </p>
          {ticketNumber != 0 && (
            <div className={styles.counter}>
              <button className={styles.minusButton} onClick={handleDecrement}>
                <svg
                  viewBox="0 0 24 24"
                  width="95%"
                  height="95%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <p className={styles.count}>{ticketNumber}</p>
              <button className={styles.plusButton} onClick={handleIncrement}>
                <svg
                  viewBox="0 0 24 24"
                  width="95%"
                  height="95%"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          )}
          <button
            className={styles.buyTickets}
            onClick={handleBuyTickets}
            disabled={data.ticketsAvailable === 0}
          >
            {data.ticketsAvailable === 0 ? "SOLD OUT" : "Buy Tickets"}
          </button>
        </div>
      </div>
    </div>
  );
}
