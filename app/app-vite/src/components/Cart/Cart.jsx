import styles from "./Cart.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCardContext } from "../../context/CardContext.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, isAuthenticated } = useAuth();
  const { tickets, totalTickets, totalPrice, removeTicketFromOrder } =
    useCardContext();

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  //close dropdown when a page is changed
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {totalTickets > 0 && <div className={styles.bubble}>{totalTickets}</div>}
      <button className={styles.cartIcon} onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 2 6 h 4 l 3 9 h 8 l 3 -9 h -14" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      </button>
      {isOpen &&
        (totalTickets > 0 ? (
          <div className={styles.dropdown}>
            {tickets.map((ticket) => {
              return (
                <div key={ticket.ticketTitle}>
                  <p className={styles.title}>
                    <strong>{ticket.ticketTitle}</strong>
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
                          </svg>
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
                          </svg>
                          {ticket.numberOfTickets} ticket
                          {ticket.numberOfTickets === 1 ? "" : "s"}
                        </span>
                        <span className={styles.ticketsPrice}>
                          DKK {ticket.totalPrice}
                        </span>
                      </p>
                    </div>
                    <button
                      className={styles.deleteCards}
                      onClick={() => removeTicketFromOrder(ticket.ticketTitle)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />

                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />

                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            <p className={styles.total}>
              <span>Total: </span>
              <span>DKK {totalPrice}</span>
            </p>
            <button className={styles.checkout} disabled={!isAuthenticated}>
              <Link className={styles.link} to={`checkout`}>
                Checkout
              </Link>
            </button>
            {!isAuthenticated && (
              <div className={styles.noUser}>
                <p>You are not logged in.</p>
                <p>
                  Please{" "}
                  <Link to="/login" className={styles.linkUser}>
                    <em>login</em>
                  </Link>{" "}
                  or{" "}
                  <Link to="/register" className={styles.linkUser}>
                    <em>register</em>
                  </Link>{" "}
                  here
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.dropdown}>
            <p className={styles.emptyCart}>Cart is empty</p>
          </div>
        ))}
    </>
  );
};
