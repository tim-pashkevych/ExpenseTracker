import { Outlet } from "react-router-dom";
import { Container, HeaderComponent } from "../index";

export const Layout = () => {
  return (
    <Container>
      <HeaderComponent />
      <Outlet />
    </Container>
  );
};
