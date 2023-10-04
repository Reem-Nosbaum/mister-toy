import { createBrowserRouter } from "react-router-dom";
import { RootCmp } from "./pages/main-layout";

import About from "./pages/About";
import FilterBy from "./pages/FilterBy.jsx";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <RootCmp />,
    children: [
      {
        path: "/",
        element: <Home />,
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
