import { Outlet } from "react-router-dom";
import { Container } from "../index";

export const Layout = () => {
  return (
    <Container>
      {/* Header  */}
      <Outlet />
    </Container>
  );
};
