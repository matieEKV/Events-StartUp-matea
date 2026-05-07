// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

import { EventCard } from "../EventCard/EventCard.jsx";
import { Link, useParams } from "react-router-dom";
import { useFetchData } from "../../Hooks/FetchQueries.jsx";
import styles from "./EventDetail.module.css";

export default function EventDetail() {
  const { id } = useParams();

  // const [event, setEvent] = useState(null);

  const { data, loading, error } = useFetchData(`events/${id}`);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No event found.</p>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageBlock}>
        <div className={styles.blackBoxR}>
          <div className={styles.shortInfo}>
            <div className={styles.linkContainer}>
              <Link to="/events" className={styles.backButton}>
                ← Back to all events
              </Link>
            </div>
            <h3 className={styles.heading}>{data.name}</h3>
            <p className={styles.info}>
              {data.city} | {data.venue}
            </p>
            <p className={styles.info}>{data.date}</p>
          </div>
        </div>
        <img
          classNam={styles.eventImage}
          src={data.image}
          alt={data.name}
        ></img>
        <div className={styles.blackBoxL}></div>
      </div>

      <div className={styles.description}>
        <p>
          <span className={styles.legend}>DESCRIPTION</span>
          <span className={styles.descInfo}>{data.description}</span>
        </p>
        <p>
          <span className={styles.legend}>CATEGORY</span>
          <span className={styles.descInfo}>{data.category}</span>
        </p>
        <p>
          <span className={styles.legend}>PRICE</span>
          <span className={styles.descInfo}>
            {data.price === 0 ? "FREE" : data.price}
          </span>
        </p>
        <p>
          <span className={styles.legend}>AVAILABLE TICKETS</span>
          <span className={styles.descInfo}>
            {data.ticketsAvailable === 0
              ? "SOLD OUT"
              : `${data.ticketsAvailable} tickets left`}
          </span>
        </p>
      </div>
    </div>
  );
}
