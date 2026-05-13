import { Link, Outlet } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import { useAuth } from "../../context/AuthContext.jsx";
import EventDetail from "../EventDetail/EventDetail.jsx";
import EventList from "../EventList/EventList.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Navbar } from "../Navbar/Navbar.jsx";
import events from "../../data/events.js";
import { useState } from "react";

export default function Layout() {
  const { user, logout } = useAuth();

  const [isOnlyAvailable, setIsOnlyAvailable] = useState(false);
  //TO BE ADDED LATER
  // const [selectedCity, setSelectedCity] = useState("");
  // const [sortOrder, setSortOrder] = useState("Date Ascending");

  const processedEvents = events.filter((event) => {
    return !isOnlyAvailable || event.ticketsAvailable > 0;
  });

  function toggleEvents() {
    setIsOnlyAvailable(!isOnlyAvailable);
  }
  return (
    <div>
      {/* Navigation links go here — e.g. link to event list, cart, login */}
      {/* <Link to="/events" className="link"> */}
      {/* Events */}
      {/* </Link> */}

      {/* {user && ( */}
      {/* <> */}
      {/* <span>{user.email}</span> */}
      {/* <button onClick={logout}>Sign out</button> */}
      {/* </> */}
      {/* )} */}

      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/register">Register</Link> */}
      {/* </nav> */}
      {/* </header> */}

      {/* <main> */}
      {/* <Outlet /> */}
      {/* </main> */}

      {/* <footer>Footer content goes here</footer> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
