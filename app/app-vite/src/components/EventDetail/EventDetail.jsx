// TODO: display at least date, time, venue, city, and description for one event
// TODO: use useParams() to get the event id from the URL
// TODO: fetch the event from GET /events/:id instead of using mock data

import { EventCard } from "../EventCard/EventCard.jsx";

export default function EventDetail() {
  const event = {
    image:
      "https://experiencenve.com/wp-content/uploads/2018/07/Uber-Event-entry.jpg",
    title: "Tech Night at Uber Aarhus",
    date: "21-04-2026",
    time: "5:00PM - 8:00PM CET",
    venue: "Uber Aarhus",
    city: "Aarhus",
    description:
      "Join us for an insightful evening of tech talks highlighting the innovative work within Uber’s Engineering Platform team. Engage with Stacy Kerkela, Director of Observability, as she discusses the challenges and opportunities of metrics and observability at a global scale.",
  };
  return (
    <div>
      <h2>Aarhus Events</h2>
      <EventCard
        image={event.image}
        title={event.title}
        date={event.date}
        time={event.time}
        venue={event.venue}
        city={event.city}
        description={event.description}
      />
    </div>
  );
}
