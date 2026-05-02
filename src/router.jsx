import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DonationsPage from "./pages/DonationsPage/DonationsPage.jsx";
import CreateAnnouncementPage from "./pages/CreateAnnouncementPage/CreateAnnouncementPage.jsx";
import CatalogOverview from "./pages/Catalog/CatalogOverview/CatalogOverview.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "donations",
            element: <DonationsPage />,
            // children: [
            //   { index: true, element: <UsersList /> },
            //   { path: ":id", element: <UserDetails /> },
            // ],
          },
          {
            path: "create-announcement",
            element: <CreateAnnouncementPage />,
          },
          {
            path: "catalog",
            element: <CatalogOverview />,
          },
        ],
      },
    ],
  },
]);
