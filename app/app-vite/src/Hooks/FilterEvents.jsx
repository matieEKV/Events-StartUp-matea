import { useState } from "react";

export const useFilterEvents = (data) => {
  const [isOnlyAvailable, setIsOnlyAvailable] = useState(false);
  // const [selectedCity, setSelectedCity] = useState("");
  // const [sortOrder, setSortOrder] = useState("Date Ascending");

  const filteredEvents = data.filter((event) => {
    if (isOnlyAvailable) {
      return event.ticketsAvailable > 0;
    }
    return true;
  });

  function toggleEvents(e) {
    const selectedOption = e.target.value;

    setIsOnlyAvailable(selectedOption === "available");
  }

  return { isOnlyAvailable, toggleEvents, filteredEvents };
};
