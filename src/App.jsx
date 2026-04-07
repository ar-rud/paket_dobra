// import Catalog from "./pages/Catalog/Catalog.jsx";

// import "./App.css";

// function App() {
//   // change for your page
//   return <Catalog />;
//   return <Payment />

// }

// export default App;


// import React, { useState } from "react";
// import Catalog from "./pages/Catalog/Catalog.jsx";
// import Checkout from "./pages/Checkout/Checkout.jsx";
// import Payment from "./pages/Payment/Payment.jsx";
// import Success from "./pages/Success/Success.jsx";

// import "./App.css";

// function App() {
//   // Створюємо стан для сторінки. Початкове значення - 'catalog'
//   const [currentPage, setCurrentPage] = useState('catalog');

//   // Функція для відображення потрібного компонента
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'catalog':
//         return <Catalog onNavigate={() => setCurrentPage('checkout')} />;
//       case 'checkout':
//         return <Checkout 
//                   onNext={() => setCurrentPage('payment')} 
//                   onBack={() => setCurrentPage('catalog')} 
//                />;
//       case 'payment':
//         return <Payment 
//                   onNext={() => setCurrentPage('success')} 
//                   onBack={() => setCurrentPage('checkout')} 
//                />;
//       case 'success':
//         return <Success onHome={() => setCurrentPage('catalog')} />;
//       default:
//         return <Catalog />;
//     }
//   };

//   return (
//     <div className="app-container">
//       {renderPage()}
//     </div>
//   );
// }

// export default App;

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
