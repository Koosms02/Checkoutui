import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import CheckOut from './js/CheckOut'
import App from './App';
import OrderPlaced from './components/Order_Place';
import {
  RouterProvider, createBrowserRouter,
} from 'react-router-dom';
import CheckOut from './pages/CheckOut';
import { CartProvider } from './State/useCart';
import { DataProvider } from './State/useData';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App />

  },

  {
    path: "/checkout",
    element:
      <CheckOut />

  },
  {
    path: "/payment",
    element: <OrderPlaced />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </CartProvider>
  </React.StrictMode>


);

