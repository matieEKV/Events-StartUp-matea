import styles from "./Orders.module.css";
import { useFetchData } from "../../Hooks/FetchQueries.jsx";
import { CartDetails } from "../CartDetails/CartDetails.jsx";
import { useAuth } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";

export const Orders = () => {
  const { user, token, isAuthenticated } = useAuth();

  if (!(isAuthenticated || user)) {
    return (
      <p className="errorStatus">
        You must be logged in to see previous orders. Please login now.
      </p>
    );
  }
  const { data, loading, error } = useFetchData(`orders?user_id=${user.id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  //errors
  if (loading)
    return <p className="loadingStatus">Loading previous orders...</p>;

  if (error) return <p className="errorStatus">{error}</p>;
  console.log(data);
  return (
    <>
      <div className={styles.ticketContainer}>
        <Link to="/events" className={styles.link}>
          ← Back to Events
        </Link>
        <p className={styles.heading}>YOUR ORDER HISTORY</p>
        {data.length === 0 && (
          <p className={styles.emptyOrder}>
            <em>No previous orders. Go to Events Page and order tickets!</em>
          </p>
        )}
        {data.map((order) => {
          return order.tickets.map((ticket) => (
            <div className={styles.ticket}>
              <CartDetails
                key={ticket.ticketTitle}
                ticket={ticket}
                imageSlot={ticket.ticketImage}
              />
            </div>
          ));
        })}
      </div>
    </>
  );
};
