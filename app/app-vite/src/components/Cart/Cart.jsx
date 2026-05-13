import styles from "./Cart.module.css";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, isAuthenticated } = useAuth();

  function handleOnClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className={styles.cartIcon} onClick={handleOnClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M 2 6 h 4 l 3 9 h 8 l 3 -9 h -14" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <p>Ticket description will come here</p>
          <p>Price will come here</p>
          <p>Total will come here</p>
          <button>go to orders</button>
        </div>
      )}
    </>
  );
};
