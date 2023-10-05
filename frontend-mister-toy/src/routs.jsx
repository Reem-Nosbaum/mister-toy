import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./pages/MainLayout";

import About from "./pages/About";
import FilterBy from "./pages/FilterBy.jsx";
import Home from "./pages/Home";
import Pops from "./pages/Pops";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pops",
        element: <Pops />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "FilterBy",
        element: <FilterBy />,
      },
    ],
  },
]);
