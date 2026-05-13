import styles from "./Checkout.module.css";
import { useCardContext } from "../../context/CardContext.jsx";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { tickets, totalTickets, totalPrice } = useCardContext();

  return (
    <div className={styles.page}>
      <div className={styles.ticketsContainer}>
        <Link to="/events" className={styles.link}>
          ← Back to Events
        </Link>
        <p className={styles.heading}> YOUR CART</p>
        {tickets.map((ticket) => {
          return (
            <div key={ticket.ticketName} className={styles.infoContainer}>
              <img
                className={styles.ticketImage}
                src={ticket.ticketImage}
                alt={ticket.ticketName}
              ></img>
              <p className={styles.title}>
                <strong>{ticket.ticketTitle}</strong>
              </p>
              <p className={styles.infoP}>
                <span className={styles.dateTime}>{ticket.ticketDate}</span>
                <span className={styles.dateTime}>{ticket.ticketTime}</span>
              </p>
              <p className={styles.ticketInfo}>
                <span className={styles.ticketsPrice}>
                  {ticket.numberOfTickets} ticket
                  {ticket.numberOfTickets === 1 ? "" : "s"}
                </span>
                <span className={styles.ticketsPrice}>
                  DKK {ticket.totalPrice}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.checkoutContainer}>
        <div className={styles.order}>
          <p className={styles.orderInfo}>
            <span>Tickets: </span>
            <span>{totalTickets}</span>
          </p>
          <p className={styles.orderInfo}>
            <span>Total: </span>
            <span>DKK {totalPrice}</span>
          </p>
        </div>
        <button className={styles.buy}>Buy Now</button>
      </div>
    </div>
  );
};
