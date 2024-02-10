import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { LoginPage, RegisterPage } from "../pages";
import { ROUTES } from "../constants";

const { HOME, SIGN_IN, SIGN_UP, TRANSACTION, HISTORY } = ROUTES;

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element />
        <Route path={SIGN_IN} element={<LoginPage />} />
        <Route path={SIGN_UP} element={<RegisterPage />} />
        <Route path={`${TRANSACTION}/:transactionsType`} element />
        <Route path={`${TRANSACTION}/${HISTORY}/:transactionsType`} element />
      </Route>
    </Routes>
  );
}

export default App;
