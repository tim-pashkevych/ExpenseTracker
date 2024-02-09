import { AuthForm } from "../index";
import styles from "./RegisterPage.module.css";
export const RegisterPage = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const formData = [
    { name: "name", type: "text", label: "Username" },
    { name: "email", type: "email", label: "Useremail" },
    { name: "password", type: "password", label: "Userpassword" },
  ];

  const onSumbit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign Up</h1>
      <p className={styles.description}>
        Step into a world of hassle-free expense <br /> management! Your journey
        towards financial mastery begins here.
      </p>
      <AuthForm
        initialState={initialState}
        formData={formData}
        buttonText="Sign Up"
        onSumbit={onSumbit}
      />
    </div>
  );
};
