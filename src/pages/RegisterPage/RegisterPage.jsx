import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import { AuthForm } from "../../components/index"

import { registerThunk } from "@/redux/auth/operations"
import { selectError } from "@/redux/auth/slice"
import styles from "./RegisterPage.module.css"

export const RegisterPage = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectError)

  const formData = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ]

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(8),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSumbit = handleSubmit(data => dispatch(registerThunk(data)))

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])

  const navigation = {
    text: "Already have account?",
    textLink: "Sign In",
    route: "/login",
  }

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
        register={register}
        errors={errors}
        navigation={navigation}
      />
    </div>
  )
}
