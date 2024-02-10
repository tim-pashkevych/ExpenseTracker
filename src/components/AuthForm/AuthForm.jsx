import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation } from "react-router-dom";
// import OpenEye from "../../../src/assets/icons/OpenEye.svg?react";
// import ClosedEye from "../../../src/assets/icons/ClosedEye.svg?react";
import styles from "./AuthForm.module.css";
export const AuthForm = ({
  formData,
  buttonText,
  onSumbit,
  initialState,
  validation,
  navigation,
}) => {
  const location = useLocation();
  const getClassNameDivWrapper = () => {
    if (location.pathname === "/login") {
      return styles.inputsWrapperLogin;
    } else {
      return styles.inputsWrapperRegister;
    }
  };
  const classNamesDiv = getClassNameDivWrapper();
  //   const [showPass, setShowPass] = useState(false);
  //   const passVisibility = () => {
  //     setShowPass((prevState) => !prevState);
  //   };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validation),
    defaultValues: initialState,
  });

  const onSubmitHandel = (data) => onSumbit(data);
  //   const validationSchema = Yup.object().shape({ });
  return (
    <form onSubmit={handleSubmit(onSubmitHandel)} className={styles.form}>
      <div className={classNamesDiv}>
        {formData?.map((input) => (
          <input
            placeholder={input.placeholder}
            key={input.name}
            className={styles.input}
            type={input.type}
            name={input.name}
          />
        ))}
      </div>
      <button className={styles.button} type="submit">
        {buttonText}
      </button>
      <p className={styles.text}>
        {navigation.text}{" "}
        <Link to={navigation.route} className={styles.link}>
          {navigation.textLink}
        </Link>
      </p>
    </form>
  );
};
