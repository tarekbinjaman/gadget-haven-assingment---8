import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './comonents/Root/Root';
import ErrorPage from './comonents/error/ErrorPage';
import Home from './comonents/Home/Home';
import DashBoard from './comonents/DashBoard/DashBoard';
import Stastics from './comonents/Stastics/Stastics';
import ProductDetails from './comonents/ProductDetails/ProductDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: 'stastics',
        element: <Stastics></Stastics>
      },
      {
        path: 'details/:productId',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('/product.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
