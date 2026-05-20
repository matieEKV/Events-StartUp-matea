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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="5"
                      y="4"
                      width="15"
                      height="15"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="5" y1="10" x2="18" y2="10"></line>
                  </svg>{" "}
                  {ticket.ticketDate}
                </span>
                <span className={styles.dateTime}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>{" "}
                  {ticket.ticketTime}
                </span>
              </p>
              <p className={styles.ticketInfo}>
                <span className={styles.ticketsPrice}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                  </svg>{" "}
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
