import React, { useState } from "react";
import Catalog from "./pages/Catalog/Catalog";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import Success from "./pages/Success/Success";
import CardPayment from "./pages/Card/CardPayment";

import "./App.css";

function App() {
  const [page, setPage] = useState("checkout");

  return (
    <div className="app-container">
      {page === "catalog" && <Catalog onNext={() => setPage("checkout")} />}
      {page === "checkout" && <Checkout onNext={() => setPage("payment")} onBack={() => setPage("catalog")} />}
      {page === "payment" && <Payment onNext={() => setPage("card")} onBack={() => setPage("checkout")} />}
      {page === "card" && <CardPayment onNext={() => setPage("success")} onBack={() => setPage("payment")} />}
      {page === "success" && <Success onHome={() => setPage("catalog")} />}
    </div>
  );
}

export default App;
