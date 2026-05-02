// Hardcoded mock events for development before switching to fetch.
// Shape should match the API: GET /events
const events = [
  {
    id: 1,
    image: "https://frantic.im/assets/react-conf-2018/og-image.jpg",
    name: "React Copenhagen Conference 2026",
    date: "2026-04-15",
    time: "09:00",
    venue: "Copenhagen Concert Hall",
    city: "Copenhagen",
    description:
      "The largest React conference in Scandinavia. Two tracks covering the latest in React 19, Server Components, and the evolving frontend ecosystem. Keynotes from core React team members and community leaders.",
    price: 149,
    ticketsAvailable: 0,
    totalTickets: 800,
    category: "Conference",
  },
  {
    id: 2,
    image:
      "https://experiencenve.com/wp-content/uploads/2018/07/Uber-Event-entry.jpg",
    name: "Tech Night at Uber Aarhus",
    date: "21-04-2026",
    time: "17:00",
    venue: "Uber Aarhus",
    city: "Aarhus",
    description:
      "Join us for an insightful evening of tech talks highlighting the innovative work within Uber’s Engineering Platform team. Engage with Stacy Kerkela, Director of Observability, as she discusses the challenges and opportunities of metrics and observability at a global scale.",
    price: 35,
    ticketsAvailable: 3,
    totalTickets: 45,
    category: "Conference",
  },
  {
    id: 3,
    image:
      "https://www.finconsgroup.com/imgpub/2212810/1900/0/agentic_ai_-_proposta_3.jpg",
    name: "Hackathon: Build with AI",
    date: "2026-04-25",
    time: "09:00",
    venue: "BLOX",
    city: "Copenhagen",
    description:
      "A 24-hour hackathon where teams of 2–4 build something real using AI APIs. Cash prizes, free food, and mentoring from engineers at leading AI companies. All skill levels welcome.",
    price: 0,
    ticketsAvailable: 60,
    totalTickets: 150,
    category: "Hackathon",
  },
  {
    id: 4,
    image:
      "https://fstacademy.com/wp-content/uploads/2022/07/Free-Courses-to-learn-JavaScript.jpg",
    name: "JavaScript: Modern Patterns Workshop",
    date: "2026-05-03",
    time: "10:00",
    venue: "Founders House",
    city: "Copenhagen",
    description:
      "A hands-on full-day workshop covering modern JavaScript patterns: closures, async/await, Promises, modules, and functional techniques. Bring your laptop. Small group, individual coaching included.",
    price: 79,
    ticketsAvailable: 12,
    totalTickets: 30,
    category: "Workshop",
  },
  {
    id: 5,
    image: "https://frantic.im/assets/react-conf-2018/og-image.jpg",
    name: "React Copenhagen Conference 2026",
    date: "2026-04-15",
    time: "09:00",
    venue: "Copenhagen Concert Hall",
    city: "Copenhagen",
    description:
      "The largest React conference in Scandinavia. Two tracks covering the latest in React 19, Server Components, and the evolving frontend ecosystem. Keynotes from core React team members and community leaders.",
    price: 149,
    ticketsAvailable: 0,
    totalTickets: 800,
    category: "Conference",
  },
  {
    id: 6,
    image:
      "https://experiencenve.com/wp-content/uploads/2018/07/Uber-Event-entry.jpg",
    name: "Tech Night at Uber Aarhus",
    date: "21-04-2026",
    time: "17:00",
    venue: "Uber Aarhus",
    city: "Aarhus",
    description:
      "Join us for an insightful evening of tech talks highlighting the innovative work within Uber’s Engineering Platform team. Engage with Stacy Kerkela, Director of Observability, as she discusses the challenges and opportunities of metrics and observability at a global scale.",
    price: 35,
    ticketsAvailable: 3,
    totalTickets: 45,
    category: "Conference",
  },
  {
    id: 7,
    image:
      "https://www.finconsgroup.com/imgpub/2212810/1900/0/agentic_ai_-_proposta_3.jpg",
    name: "Hackathon: Build with AI",
    date: "2026-04-25",
    time: "09:00",
    venue: "BLOX",
    city: "Copenhagen",
    description:
      "A 24-hour hackathon where teams of 2–4 build something real using AI APIs. Cash prizes, free food, and mentoring from engineers at leading AI companies. All skill levels welcome.",
    price: 0,
    ticketsAvailable: 60,
    totalTickets: 150,
    category: "Hackathon",
  },
  {
    id: 8,
    image:
      "https://fstacademy.com/wp-content/uploads/2022/07/Free-Courses-to-learn-JavaScript.jpg",
    name: "JavaScript: Modern Patterns Workshop",
    date: "2026-05-03",
    time: "10:00",
    venue: "Founders House",
    city: "Copenhagen",
    description:
      "A hands-on full-day workshop covering modern JavaScript patterns: closures, async/await, Promises, modules, and functional techniques. Bring your laptop. Small group, individual coaching included.",
    price: 79,
    ticketsAvailable: 12,
    totalTickets: 30,
    category: "Workshop",
  },
  {
    id: 9,
    image: "https://frantic.im/assets/react-conf-2018/og-image.jpg",
    name: "React Copenhagen Conference 2026",
    date: "2026-04-15",
    time: "09:00",
    venue: "Copenhagen Concert Hall",
    city: "Copenhagen",
    description:
      "The largest React conference in Scandinavia. Two tracks covering the latest in React 19, Server Components, and the evolving frontend ecosystem. Keynotes from core React team members and community leaders.",
    price: 149,
    ticketsAvailable: 0,
    totalTickets: 800,
    category: "Conference",
  },
  {
    id: 10,
    image:
      "https://experiencenve.com/wp-content/uploads/2018/07/Uber-Event-entry.jpg",
    name: "Tech Night at Uber Aarhus",
    date: "21-04-2026",
    time: "17:00",
    venue: "Uber Aarhus",
    city: "Aarhus",
    description:
      "Join us for an insightful evening of tech talks highlighting the innovative work within Uber’s Engineering Platform team. Engage with Stacy Kerkela, Director of Observability, as she discusses the challenges and opportunities of metrics and observability at a global scale.",
    price: 35,
    ticketsAvailable: 3,
    totalTickets: 45,
    category: "Conference",
  },
  {
    id: 13,
    image:
      "https://www.finconsgroup.com/imgpub/2212810/1900/0/agentic_ai_-_proposta_3.jpg",
    name: "Hackathon: Build with AI",
    date: "2026-04-25",
    time: "09:00",
    venue: "BLOX",
    city: "Copenhagen",
    description:
      "A 24-hour hackathon where teams of 2–4 build something real using AI APIs. Cash prizes, free food, and mentoring from engineers at leading AI companies. All skill levels welcome.",
    price: 0,
    ticketsAvailable: 60,
    totalTickets: 150,
    category: "Hackathon",
  },
  {
    id: 14,
    image:
      "https://fstacademy.com/wp-content/uploads/2022/07/Free-Courses-to-learn-JavaScript.jpg",
    name: "JavaScript: Modern Patterns Workshop",
    date: "2026-05-03",
    time: "10:00",
    venue: "Founders House",
    city: "Copenhagen",
    description:
      "A hands-on full-day workshop covering modern JavaScript patterns: closures, async/await, Promises, modules, and functional techniques. Bring your laptop. Small group, individual coaching included.",
    price: 79,
    ticketsAvailable: 12,
    totalTickets: 30,
    category: "Workshop",
  },
];

export default events;
