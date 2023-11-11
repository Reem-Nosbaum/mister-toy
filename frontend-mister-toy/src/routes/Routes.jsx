import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import Login from "../pages/Login";
import Fandoms from "../pages/Fandoms";
import Category from "../pages/Category";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/fandoms",
        element: <Fandoms />,
        children: [
          {
            path: "/fandoms/shop-all",
            element: <Fandoms />,
          },
          {
            path: "/fandoms/movies&tv",
            element: <Fandoms />,
          },
        ],
      },
      {
        path: "/category",
        element: <Category />,
        children: [
          {
            path: "/category/accessories",
            element: <Category />,
          },
          {
            path: "/category/apparel",
            element: <Category />,
          },
        ],
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
