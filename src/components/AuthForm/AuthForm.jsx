import { Link } from "react-router-dom"

import styles from "./AuthForm.module.css"
import { Fragment } from "react"

export const AuthForm = ({
  onSumbit,
  formData,
  buttonText,
  errors,
  register,
  navigation,
  divWrapperStyles,
}) => {
  return (
    <form onSubmit={onSumbit} className={styles.form}>
      <div className={styles.inputsWrapper} style={divWrapperStyles}>
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
