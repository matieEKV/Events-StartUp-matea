// TODO: build a register form with relevant fields
// TODO: call register(email, password) from useAuth() on submit
// TODO: show a clear error message if registration fails
// TODO: redirect to the event list on success
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { UserForm } from "../UserForm/UserForm.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { user, token, register } = useAuth();

  //validation for password length - inspiration taken from https://coreui.io/answers/how-to-validate-email-in-react-form/
  const isValidPassword = password.length === 0 || password.length >= 8;
  const [passwordTouched, setPasswordTouched] = useState(false);
  const isAuthenticated = !!user && !!token;

  //postpone navigating after successful registration to show the success message
  useEffect(() => {
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        navigate("/events");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, navigate]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password);
      navigate("/events");
    } catch (error) {
      setErrorMessage(
        "Could not register at the moment. Please try again later: ",
      );
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
        onSubmit={handleRegisterSubmit}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onCancel={() => navigate("/events")}
        buttonText="Register"
        autoComplete="new-password"
      />
      {errorMessage && (
        <div className={styles.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      )}
      {isAuthenticated && (
        <div className={styles.successMessage}>
          <p>You registered successfully!</p>
          <p>Loading the Events page now.</p>
        </div>
      )}
    </>
  );
}
