import { AuthForm } from "../index";
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
  const divWrapper = { marginBottom: "142px" };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign In</h1>
      <p className={styles.description}>
        Welcome back to effortless expense tracking! Your financial dashboard
        awaits.
      </p>
      <AuthForm
        divWrapperStyles={divWrapper}
        formData={formData}
        buttonText="Sign In"
        onSumbit={onSumbit}
        navigation={navigation}
        // validation={validationSchema}
      />
    </div>
  );
};
