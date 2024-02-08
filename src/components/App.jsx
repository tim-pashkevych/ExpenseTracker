import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element />
        <Route path="sign_in" element />
        <Route path="sign_up" element />
        <Route path="transactions/:transactionsType" />
        <Route path="transactions/history/:transactionsType" />
      </Route>
    </Routes>
  );
}

export default App;
