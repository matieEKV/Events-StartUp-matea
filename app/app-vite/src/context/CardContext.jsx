import { createContext, useContext, useState } from "react";

export const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const addTicketToOrder = (
    ticketTitle,
    ticketDate,
    ticketTime,
    ticketPrice,
    numberOfTickets,
    totalPrice,
  ) => {
    setTickets([
      ...tickets,
      {
        ticketTitle,
        ticketDate,
        ticketTime,
        ticketPrice,
        numberOfTickets,
        totalPrice,
      },
    ]);
    console.log(tickets);
    persist(tickets);
  };
  const removeTicketFromOrder = (ticketId) => {
    setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
  };

  function persist(tickets) {
    localStorage.setItem("orders", JSON.stringify(tickets));
  }
  return (
    <CardContext.Provider
      value={{ tickets, addTicketToOrder, removeTicketFromOrder }}
    >
      {" "}
      {children}{" "}
    </CardContext.Provider>
  );
};

export function useCardContext() {
  return useContext(CardContext);
}
