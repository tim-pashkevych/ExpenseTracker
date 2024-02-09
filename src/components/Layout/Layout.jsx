import { Outlet } from "react-router-dom";
import { BgImageWrapper, Container } from "../index";

export const Layout = () => {
  return (
    <Container>
      {/* Header  */}
      <Outlet />
    </Container>
  );
};
