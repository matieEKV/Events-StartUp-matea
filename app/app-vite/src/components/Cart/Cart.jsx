import styles from "./Cart.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useCardContext } from "../../context/CardContext.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CartDetails } from "../CartDetails/CartDetails.jsx";
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
            {tickets.map(
              (ticket) => (
                <CartDetails
                  key={ticket.title}
                  ticket={ticket}
                  titleStyle={ticket.ticketTitle}
                  actionSlot={
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
                  }
                />
              ),
              //
            )}
            <p className={styles.total}>
              <span>Total: </span>
              <span>DKK {totalPrice}</span>
            </p>
            <button className={styles.checkout} disabled={!isAuthenticated}>
              {" "}
              {isAuthenticated ? (
                <Link className={styles.link} to={`checkout`}>
                  Checkout
                </Link>
              ) : (
                "Checkout"
              )}
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
