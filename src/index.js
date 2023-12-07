import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import CheckOut from './js/CheckOut'
import App from './App';
import Home from './pages/HomePage';
import OrderPlaced from './components/Order_Place';
import {
  RouterProvider, createBrowserRouter,
} from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home />

  },
  {
    path: "/payment",
    element: <OrderPlaced />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}>
  <App />
</RouterProvider>);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
