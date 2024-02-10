import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";
export const AuthForm = ({
  formData,
  buttonText,
  onSumbit,
  initialState,
  validation,
  navigation,
  divWrapperStyles,
}) => {
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
      <div className={styles.inputsWrapper} style={divWrapperStyles}>
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
