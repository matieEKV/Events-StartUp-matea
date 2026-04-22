import styles from "./EventCard.module.css";

export const EventCard = ({
  image,
  title,
  date,
  time,
  venue,
  city,
  description,
}) => {
  return (
    <div className={styles.eventCard}>
      <img className={styles.eventImage} src={image} alt="conference event" />
      <section className={styles.infoContainer}>
        <section className={styles.eventInfo}>
          <h5 class={styles.label}>Title</h5>
          <h4 className={styles.eventTitle}>{title}</h4>
          <h5 class={styles.label}>Date and Time</h5>
          <div className={styles.dateTime}>
            <span>{date}</span>
            <span>{time}</span>
          </div>

          <h5 class={styles.label}>Location</h5>
          <div className={styles.eventLocation}>
            <span>{venue}</span>
            <span>{city}</span>
          </div>
          <h5 class={styles.label}>Description</h5>
          <p className={styles.eventDescription}>{description}</p>
        </section>
      </section>
    </div>
  );
};
