import { AuthForm } from "../../components/index";
import styles from "./LoginPage.module.css";
export const LoginPage = () => {
  const formData = [
    { name: "email", type: "text", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];
  const onSumbit = (data) => {};
  const navigation = {
    text: "Don't have an account?",
    textLink: "Sign Up",
    route: "/register",
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>
      <p className={styles.description}>
        Welcome back to effortless expense tracking! Your financial dashboard
        awaits.
      </p>
      <AuthForm
        formData={formData}
        buttonText="Sign In"
        onSumbit={onSumbit}
        navigation={navigation}
        // validation={validationSchema}
      />
    </div>
  );
};
