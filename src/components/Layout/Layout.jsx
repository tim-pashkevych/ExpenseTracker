// import { Outlet } from "react-router-dom";
import { Container } from "../index";
import TransactionForm from "../TransactionForm/TransactionForm";

export const Layout = () => {
  return (
    <Container>
      {/* Header  */}
      {/* <Outlet /> */}
      <TransactionForm />
    </Container>
  );
};
