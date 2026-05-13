import styles from "./Cart.module.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCardContext } from "../../context/CardContext.jsx";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, isAuthenticated } = useAuth();
  const { tickets, totalTickets, totalPrice } = useCardContext();

  console.log(tickets.numberOfTickets);

  console.log(tickets.length);

  function handleOnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={styles.iconContainer}>
        {totalTickets > 0 && (
          <div className={styles.bubble}>{totalTickets}</div>
        )}
        <button className={styles.cartIcon} onClick={handleOnClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M 2 6 h 4 l 3 9 h 8 l 3 -9 h -14" />
            <circle cx="9" cy="18" r="1.5" />
            <circle cx="17" cy="18" r="1.5" />
          </svg>
        </button>
      </div>
      {isOpen &&
        (totalTickets > 0 ? (
          <div className={styles.dropdown}>
            {tickets.map((ticket) => {
              return (
                <>
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
                </>
              );
            })}
            <p className={styles.total}>
              <span>Total: </span>
              <span>DKK {totalPrice}</span>
            </p>
            <button className={styles.checkout}>Checkout</button>
          </div>
        ) : (
          <div className={styles.dropdown}>
            <p className={styles.emptyCart}>Cart is empty</p>
          </div>
        ))}
    </>
  );
};
