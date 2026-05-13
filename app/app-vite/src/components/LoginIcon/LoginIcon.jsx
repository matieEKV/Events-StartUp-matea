import { useState } from "react";
import styles from "./LoginIcon.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success

export default function LoginIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, token, logout, isAuthenticated } = useAuth();

  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className={styles.loginIcon} onClick={handleOnClick}>
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>

      {isOpen &&
        (!isAuthenticated ? (
          <div className={styles.loginMenu}>
            <Link to="/login" className={styles.linkOptions}>
              Login
            </Link>
            <Link to="/register" className={styles.linkOptions}>
              Register
            </Link>
          </div>
        ) : (
          <div className={styles.loginMenu}>
            <button className={styles.linkOptions} onClick={logout}>
              Logout
            </button>
          </div>
        ))}
    </>
  );
}
