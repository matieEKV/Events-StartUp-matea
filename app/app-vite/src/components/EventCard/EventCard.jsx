import { useState } from "react";
import styles from "./EventCard.module.css";

export const EventCard = ({
  image,
  name,
  date,
  time,
  venue,
  city,
  description,
  price,
  ticketsAvailable,
  totalTickets,
  category,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  function toggleSection() {
    setIsShowing(!isShowing);
    console.log("I was in the function");
  }
  return (
    <div className={styles.eventCard}>
      <img className={styles.eventImage} src={image} alt="conference event" />
      <section className={styles.infoContainer}>
        <section className={styles.eventInfo}>
          <h5 className={styles.label}>Title</h5>
          <h4 className={styles.eventTitle}>{name}</h4>
          <h5 className={styles.label}>Date and Time</h5>
          <div className={styles.dateTime}>
            <span>{date}</span>
            <span>{time}</span>
          </div>

          <h5 className={styles.label}>Location</h5>
          <div className={styles.eventLocation}>
            <span>{venue}</span>
            <span>{city}</span>
          </div>
          {isShowing && (
            <>
              <h5 className={styles.label}>Description</h5>
              <p className={styles.eventDescription}>{description}</p>
              <h5 className={styles.label}>Price</h5>
              <p className={styles.price}>
                {price === 0 ? "Free" : `€${price}`}
              </p>
              <h5 className={styles.label}>Tickets Available</h5>
              <p className={styles.tickets}>
                {ticketsAvailable === 0
                  ? "Sold out"
                  : `${ticketsAvailable} tickets left`}
              </p>
              <h5 className={styles.label}>Total Tickets</h5>
              <p className={styles.tickets}>{totalTickets}</p>
              <h5 className={styles.label}>Category</h5>
              <p className={styles.category}>{category}</p>
            </>
          )}
        </section>
      </section>
      <button className={styles.toggleButton} onClick={toggleSection}>
        {isShowing ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
