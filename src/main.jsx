import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translations from "./assets/translations.json"

import App from "./App.jsx"
import Layout from "./Layout.jsx"
import Imprint from "./components/Imprint"
import LegalNotice from "./components/LegalNotice"
import FAQ from "./components/FAQ"
import About from "./components/About"
import Registration from "./components/Registration"
import Programme from "./components/Programme"
import ImageView from "./components/ImageView"
import Contact from "./components/Contact"

i18n.use(initReactI18next).init(translations)

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
        path: "/images",
        element: <ImageView />,
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
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
