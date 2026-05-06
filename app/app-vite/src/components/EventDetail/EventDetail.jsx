// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

import { EventCard } from "../EventCard/EventCard.jsx";

export default function EventDetail() {
  return (
    <div className={style.detailContainer}>
      <h2>Aarhus Events</h2>
      <EventCard
        image={event.image}
        name={event.name}
        date={event.date}
        time={event.time}
        venue={event.venue}
        city={event.city}
        description={event.description}
        price={event.price}
        ticketsAvailable={event.ticketsAvailable}
        totalTickets={event.totalTickets}
        category={event.category}
      />
    </div>
  );
}
