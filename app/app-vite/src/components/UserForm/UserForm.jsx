import styles from "./UserForm.module.css";

export const UserForm = ({
  password,
  email,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onCancel,
  buttonText,
  autocompleteType,
}) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.registerForm} onSubmit={onSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={onEmailChange}
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            autoComplete={autocompleteType}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.formButton}
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button className={styles.formButton} type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};
