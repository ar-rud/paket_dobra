import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DonationsPage from "./pages/DonationsPage/DonationsPage.jsx";
import CreateAnnouncementPage from "./pages/CreateAnnouncementPage/CreateAnnouncementPage.jsx";
import CatalogOverview from "./pages/Catalog/CatalogOverview/CatalogOverview.jsx";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";

const validCategories = [
  "home",
  "health-beauty",
  "clothes",
  "kids",
  "pets",
  "hobbies",
  "art-craft",
  "services",
  "books",
  "electronics",
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "donations",
            element: <DonationsPage />,
          },
          {
            path: "create-announcement",
            element: <CreateAnnouncementPage />,
          },
          {
            path: "catalog",
            // element: <CatalogOverview />,
            children: [
              { index: true, element: <CatalogOverview /> },
              {
                path: ":category",
                element: <Catalog />,
              },
            ],
          },
          {
            path: "statistics",
            element: <StatisticsPage />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
