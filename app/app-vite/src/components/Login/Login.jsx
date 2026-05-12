import { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../UserForm/UserForm.jsx";

// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success

// e => { e.preventDefault(); setSubmitted(true)};
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/events");
    } catch (error) {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };
  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <UserForm
        password={password}
        email={email}
        onSubmit={handleLoginSubmit}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onCancel={() => navigate("/events")}
        buttonText="Login"
        autoComplete="current-password"
      />
      {errorMessage && (
        <div className={styles.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
}
