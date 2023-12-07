import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "./MainLayout";
import SignIn from "../pages/SignIn";
import Fandoms from "../pages/Fandoms";
import Category from "../pages/Category";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import PopPreview from "../pages/PopPreview";

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
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/pop-preview/:id",
        element: <PopPreview />,
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
