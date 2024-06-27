import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import App from './App.jsx'
import Layout from './Layout.jsx';
import Imprint from './components/Imprint';
import LegalNotice from './components/LegalNotice';
import FAQ from './components/FAQ';
import Registration from './components/Registration';

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
      }      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
