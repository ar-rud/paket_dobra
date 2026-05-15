import HomePage from "./pages/HomePage/HomePage.jsx";
import DonationsPage from "./pages/DonationsPage/DonationsPage.jsx";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage.jsx";
import CreateAnnouncementPage from "./pages/CreateAnnouncementPage/CreateAnnouncementPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import CatalogOverview from "./pages/Catalog/CatalogOverview/CatalogOverview.jsx";

import { Outlet } from "react-router";

import { useState } from "react";
import Cart from "/src/components/Cart/Cart.jsx";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header topInfoText="" onCartOpen={() => setCartOpen(true)} />
      <Outlet></Outlet>
      <Footer></Footer>
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default App;
