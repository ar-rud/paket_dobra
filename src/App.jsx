import Catalog from "./pages/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

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
