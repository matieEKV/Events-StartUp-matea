import styles from "./CartDetails.module.css";
import { Link } from "react-router-dom";

export const CartDetails = ({ ticket, imageSlot, titleStyle, actionSlot }) => {
  return (
    <div className={styles.ticketsContainer}>
      {imageSlot && (
        <img
          className={styles.ticketImage}
          src={ticket.ticketImage}
          alt={ticket.ticketName}
        />
      )}
      <div className={styles.description}>
        <div>
          <p className={styles.title}>
            <strong>{titleStyle}</strong>
          </p>
          <div className={styles.infoContainer}>
            <div>
              <p className={styles.infoP}>
                <span className={styles.dateTime}>
                  <i className="fa-regular fa-calendar"></i>
                  {ticket.ticketDate}
                </span>
                <span className={styles.dateTime}>
                  <i class="fa-regular fa-clock"></i>
                  {ticket.ticketTime}
                </span>
              </p>
              <p className={styles.ticketInfo}>
                <span className={styles.ticketsPrice}>
                  <i className="fa-solid fa-ticket"></i>
                  {ticket.numberOfTickets} ticket
                  {ticket.numberOfTickets === 1 ? "" : "s"}
                </span>
                <span className={styles.ticketsPrice}>
                  DKK {ticket.totalPrice}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {actionSlot && actionSlot}
    </div>
  );
};
