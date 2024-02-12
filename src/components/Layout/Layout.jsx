import { Suspense } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { BgImageWrapper, Container, HeaderComponent, Loader } from "../index"

import { useSelector } from "react-redux"
import { selectIsLoading } from "@/redux/auth/slice"
import { ROUTES } from "./../../constants"

const { HOME, SIGN_IN, SIGN_UP } = ROUTES

export const Layout = () => {
  const { pathname } = useLocation()
  const isLoading = useSelector(selectIsLoading)

  return (
    <Container>
      <HeaderComponent />

      {isLoading ? <Loader /> : <Outlet />}
      {pathname === HOME || pathname === SIGN_IN || pathname === SIGN_UP ? (
        <BgImageWrapper />
      ) : undefined}
    </Container>
  )
}
