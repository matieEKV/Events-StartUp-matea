import styles from "./Checkout.module.css";
import { useCardContext } from "../../context/CardContext.jsx";
import { Link } from "react-router-dom";
import { CartDetails } from "../CartDetails/CartDetails.jsx";
import { useCheckout } from "../../Hooks/CheckoutOrders.jsx";

export const Checkout = () => {
  const { tickets, totalTickets, totalPrice } = useCardContext();
  const { checkout, checkedOut, receipt, loading, error } = useCheckout();

  if (error)
    return (
      <p className="errorStatus">
        Could not complete checkout at the moment: {error}
      </p>
    );

  return (
    <div className={styles.page}>
      <div className={styles.ticketsContainer}>
        <Link to="/events" className={styles.link}>
          ← Back to Events
        </Link>

        {!checkedOut ? (
          <p className={styles.heading}>YOUR CART</p>
        ) : (
          <div className={styles.successContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12l3 3 5-6"></path>
            </svg>
            <p className={styles.success}>THANK YOU FOR YOUR ORDER! </p>
            <p className={styles.success}>
              YOUR ORDER IS SUCCESSFULLY PROCESSED!
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.checkedOutButton}>
                <Link className={styles.links} to="orders">
                  To My Orders
                </Link>
              </button>
              <button className={styles.checkedOutButton}>
                <Link className={styles.links} to="/events">
                  To Events Page
                </Link>
              </button>
            </div>
          </div>
        )}
        {tickets.map((ticket) => {
          return (
            <div key={ticket.ticketName} className={styles.infoContainer}>
              <CartDetails
                ticket={ticket}
                imageSlot={ticket.ticketImage}
                titleStyle={ticket.ticketTitle}
              />
            </div>
          );
        })}
        {!checkedOut && (
          <div className={styles.checkoutContainer}>
            <div className={styles.order}>
              <p className={styles.summary}>Order Summary</p>
              <p className={styles.orderInfo}>
                <span>Tickets: </span>
                <span>{totalTickets}</span>
              </p>
              <p className={styles.orderInfo}>
                <span>Total: </span>
                <span>DKK {totalPrice}</span>
              </p>
            </div>
            <button className={styles.buy} onClick={checkout}>
              {!loading ? "Buy Now" : "Processing order"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
