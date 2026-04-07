import Catalog from "./pages/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./pages/Catalog/Header/Header.jsx";

import "./App.css";

function App() {
  // change for your page
  return (
    <>
      <Header/>
      <Catalog />
      <Footer />
    </>
  );
}

export default App;
