import { AuthForm } from "../../components/index";
import styles from "./RegisterPage.module.css";
import * as Yup from "yup";
export const RegisterPage = () => {
  const formData = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];
  const onSumbit = (data) => {
    console.log("TEST", data);
  };
  const navigation = {
    text: "Already have account?",
    textLink: "Sign In",
    route: "/login",
  };
  //   const validationSchema = Yup.object().shape({});
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <p className={styles.description}>
        Step into a world of hassle-free expense <br /> management! Your journey
        towards financial mastery begins here.
      </p>
      <AuthForm
        formData={formData}
        buttonText="Sign Up"
        onSumbit={onSumbit}
        navigation={navigation}
        // validation={validationSchema}
      />
    </div>
  );
};
