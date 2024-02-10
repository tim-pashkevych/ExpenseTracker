import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css";
export const AuthNav = () => {
  return (
    <>
      <ul className={styles.navList}>
        <li className={styles.navElem}>
          <Link to="/register" className={styles.navLinkSignUp}>
            Sign Up
          </Link>
        </li>
        <li className={styles.navElem}>
          <Link to="/login" className={styles.navLinkSignIn}>
            Sign In
          </Link>
        </li>
      </ul>
    </>
  );
};
