import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useCardContext } from "../context/CardContext.jsx";
import api from "../api";

export const useCheckout = () => {
  const { user, token } = useAuth();
  const { tickets, clearCart } = useCardContext();
  const [receipt, setReceipt] = useState(() => {
    const stored = localStorage.getItem("orders");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkedOut, setCheckedOut] = useState(false);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(api("orders"), {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tickets, user_id: user.id }),
      });

      if (!response.ok) {
        throw new Error("Could not Checkout at the moment.", error);
      }

      const data = await response.json();
      setReceipt(data);
      setCheckedOut(true);
      clearCart();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    setLoading(false);
  }

  return { checkout, checkedOut, receipt, loading, error };
};
