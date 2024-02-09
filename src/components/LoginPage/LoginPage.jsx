import { AuthForm } from "../index";
import styles from "./LoginPage.module.css";
export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>
      <p className={styles.description}>
        Welcome back to effortless expense tracking! Your financial dashboard
        awaits.
      </p>
      <AuthForm />
    </div>
  );
};
