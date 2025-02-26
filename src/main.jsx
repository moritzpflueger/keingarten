import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import translations from "./assets/translations.json";
import "./index.css";

import App from "./App.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Imprint from "./components/Imprint";
import LegalNotice from "./components/LegalNotice";
import Programme from "./components/Programme";
import Registration from "./components/Registration";

i18n.use(initReactI18next).init(translations);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/impressum",
        element: <Imprint />,
      },
      {
        path: "/legal",
        element: <LegalNotice />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/program",
        element: <Programme />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
