import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDispatch, useSelector } from "react-redux"

import { AuthForm, BgImageWrapper } from "../../components/index"

import styles from "./LoginPage.module.css"
import { loginThunk } from "@/redux/auth/operations"
import { useEffect, useState } from "react"
import { selectError, selectIsLoading } from "@/redux/auth/slice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

import { ROUTES } from "../../constants"
import { useWindowSizeHook } from "@/hooks/WindowSizeHook"
const { TRANSACTION } = ROUTES

export const LoginPage = () => {
  const dispatch = useDispatch()
  const error = useSelector(selectError)

  const [isRequested, setIsRequested] = useState(false)
  const isLoading = useSelector(selectIsLoading)
  const navigate = useNavigate()
  const { windowSize } = useWindowSizeHook()

  const formData = [
    { name: "email", type: "text", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ]

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSumbit = handleSubmit(data => dispatch(loginThunk(data)))

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])

  useEffect(() => {
    if (isRequested && !isLoading) {
      setIsRequested(false)
      navigate(`${TRANSACTION}/:transactionsType`)
    }
  }, [isLoading, isRequested, navigate])

  const navigation = {
    text: "Don't have an account?",
    textLink: "Sign Up",
    route: "/register",
  }

  return (
    <>
      <div className={styles.wrapperMain}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Sign In</h1>
          <p className={styles.description}>
            Welcome back to effortless expense tracking! Your financial
            dashboard awaits.
          </p>
          <AuthForm
            formData={formData}
            buttonText='Sign In'
            onSumbit={onSumbit}
            register={register}
            errors={errors}
            navigation={navigation}
          />
        </div>
      </div>
      {windowSize.innerWidth >= 1440 && <BgImageWrapper />}
    </>
  )
}
