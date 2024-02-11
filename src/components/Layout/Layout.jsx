import { Outlet } from "react-router-dom"
import { Container, HeaderComponent, Loader } from "../index"
import { Suspense } from "react"

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  )
}
