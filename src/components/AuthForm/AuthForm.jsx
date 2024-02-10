import { Link, useLocation } from "react-router-dom"

import styles from "./AuthForm.module.css"
import { Fragment } from "react"

export const AuthForm = ({
  onSumbit,
  formData,
  buttonText,
  errors,
  register,
  navigation,
}) => {
  const location = useLocation()
  const getClassNameDivWrapper = () => {
    if (location.pathname === "/login") {
      return styles.inputsWrapperLogin
    } else {
      return styles.inputsWrapperRegister
    }
  }
  const classNamesDiv = getClassNameDivWrapper()

  return (
    <form onSubmit={onSumbit} className={styles.form}>
      <div className={classNamesDiv}>
        {formData?.map(input => (
          <Fragment key={input.name}>
            <input
              {...register(input.name)}
              placeholder={input.placeholder}
              className={styles.input}
              type={input.type}
              name={input.name}
            />
            {errors[input.name] && <p>{errors[input.name].message}</p>}
          </Fragment>
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
  )
}
