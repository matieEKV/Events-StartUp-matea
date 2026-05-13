import { createContext, useContext, useState } from "react";

export const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const totalTickets = tickets.reduce(
    (sum, card) => sum + card.numberOfTickets,
    0,
  );
  const totalPrice = tickets.reduce((sum, card) => sum + card.totalPrice, 0);

  console.log("totalTickets:", totalTickets);
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
      value={{
        tickets,
        addTicketToOrder,
        removeTicketFromOrder,
        totalTickets,
        totalPrice,
      }}
    >
      {" "}
      {children}{" "}
    </CardContext.Provider>
  );
};

export function useCardContext() {
  return useContext(CardContext);
}
