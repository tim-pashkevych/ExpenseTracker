import { Route, Routes } from "react-router-dom";
import { Layout, Loader } from "../components";
import { LoginPage, RegisterPage } from "../pages";
import { ROUTES } from "../constants";
import { PublicRoute } from "@/routes/PublicRoute";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoading } from "@/redux/auth/slice";
// import { useEffect } from "react";
// import { refreshThunk } from "@/redux/auth/operations";

const { HOME, SIGN_IN, SIGN_UP, TRANSACTION, HISTORY } = ROUTES;

function App() {
  // const isRefreshing = useSelector(selectIsLoading);
  const isLoading = false;
  console.log("fix4");

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshThunk());
  // }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element />
        <Route
          path={SIGN_IN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={SIGN_UP}
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route path={`${TRANSACTION}/:transactionsType`} element />
        <Route path={`${TRANSACTION}/${HISTORY}/:transactionsType`} element />
      </Route>
    </Routes>
  );
}

export default App;
