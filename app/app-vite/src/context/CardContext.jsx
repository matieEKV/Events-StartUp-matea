import { createContext, useContext, useState } from "react";

export const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const totalTickets = tickets.reduce(
    (sum, card) => sum + card.numberOfTickets,
    0,
  );
  const totalPrice = tickets.reduce((sum, card) => sum + card.totalPrice, 0);

  const addTicketToOrder = (
    ticketImage,
    ticketTitle,
    ticketDate,
    ticketTime,
    ticketPrice,
    numberOfTickets,
    totalPrice,
  ) => {
    const newTicket = {
      ticketImage,
      ticketTitle,
      ticketDate,
      ticketTime,
      ticketPrice,
      numberOfTickets,
      totalPrice,
    };

    //check if the ticket already exists in the state, if yes update it without creating a new ticket
    //inspiration taken from https://stackoverflow.com/questions/66941071/update-quantity-of-duplicate-product-in-cart-reactjs
    const copiedCart = [...tickets];
    const foundIndex = copiedCart.findIndex(
      (item) => item.ticketTitle === newTicket.ticketTitle,
    );
    if (foundIndex === -1) {
      setTickets([...tickets, newTicket]);
    } else {
      const copiedTicket = copiedCart[foundIndex];
      copiedCart[foundIndex] = {
        ...copiedTicket,
        numberOfTickets:
          copiedTicket.numberOfTickets + newTicket.numberOfTickets,
        totalPrice: copiedTicket.totalPrice + newTicket.totalPrice,
      };
      setTickets(copiedCart);
    }

    //save in localStorage
    persist(copiedCart);
  };

  const removeTicketFromOrder = (ticketName) => {
    const updatedTickets = tickets.filter(
      (ticket) => ticketName !== ticket.ticketTitle,
    );
    setTickets(updatedTickets);
    persist(updatedTickets);
  };

  function persist(tickets) {
    localStorage.setItem("orders", JSON.stringify(tickets));
  }

  function clearCart() {
    localStorage.clear("orders");
    setTickets([]);
  }

  return (
    <CardContext.Provider
      value={{
        tickets,
        addTicketToOrder,
        removeTicketFromOrder,
        clearCart,
        totalTickets,
        totalPrice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export function useCardContext() {
  return useContext(CardContext);
}
