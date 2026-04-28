import HomePage from "./pages/HomePage/HomePage.jsx";
import DonationsPage from "./pages/DonationsPage/DonationsPage.jsx";
import CreateAnnouncementPage from "./pages/CreateAnnouncementPage/CreateAnnouncementPage.jsx";
import Header from "./components/Header/Header.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import "./App.css";

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/donations") {
    return <DonationsPage />;
  }

  if (pathname === "/create-announcement") {
    return <CreateAnnouncementPage />;
  }

  if (pathname === "/catalog") {
    return (
      <main>
        <Header topInfoText="" />
        <section style={{ background: "#eaebe6", minHeight: "100vh", padding: "32px 0 56px" }}>
          <div style={{ width: "min(100% - 32px, 1120px)", margin: "0 auto" }}>
            <Catalog />
          </div>
        </section>
      </main>
    );
  }

  return <HomePage />;
}

export default App;
