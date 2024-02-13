import { Outlet } from "react-router-dom";
import { Container, HeaderComponent, Loader } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "@/redux/auth/slice";

import CurrencyType from "../../constants/CurrencyType";
import TransactionFormActionType from "../../constants/TransactionFormActionType";
import TransactionType from "../../constants/TransactionType";
import { TransactionForm } from "../index";
import { loginThunk } from "@/redux/auth/operations";
import { useEffect } from "react";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginThunk({ email: "me@me.com", password: "me@me.com" }));
    console.log("Ok");
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />

      {/* {isLoading ? <Loader /> : <Outlet />} */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <TransactionForm
        // actionType={TransactionFormActionType.Send}
        // TransactionType={TransactionType.Income}
        // Date="2024-02-12"
        // Time="12:04"
        // Category={{ _id: "65c8e3f8f1df95584aa3d1ea", categoryName: "Coffee" }}
        // Sum="130"
        // Comment="Avengers: EndGame"
        // currency={CurrencyType.EUR}
        />
      </div>
    </Container>
  );
};
