import styles from "./Checkout.module.css";
import { useCardContext } from "../../context/CardContext.jsx";
import { Link } from "react-router-dom";
import { CartDetails } from "../CartDetails/CartDetails.jsx";

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
              <CartDetails
                ticket={ticket}
                imageSlot={ticket.ticketImage}
                titleStyle={ticket.ticketTitle}
              />
            </div>
          );
        })}
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
          <button className={styles.buy}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
