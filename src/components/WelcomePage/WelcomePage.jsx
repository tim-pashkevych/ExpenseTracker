import { AuthNav, BgImageWrapper, AllUsersTab } from "../index";
import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
  return (
    <div>
      <div className={styles.wrapperWelcomePage}>
        <p className={styles.description}>Expense log</p>
        <h1 className={styles.mainTitle}>
          Manage Your <span className={styles.mainTitleSpan}>Finances</span>{" "}
          Masterfully!
        </h1>
        <p className={styles.mainDescription}>
          ExpenseTracker effortlessly empowers you to take control of your
          finances! With intuitive features, it simplifies the process of
          tracking and managing expenses, allowing for a stress-free mastery
          over your financial world.
        </p>
      </div>
      <AuthNav />
      {/* <BgImageWrapper /> */}
      <AllUsersTab />
    </div>
  );
};
