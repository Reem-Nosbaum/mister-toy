import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootCmp } from "./src/RootCmp";
import Home from "./src/pages/home";
import Pops from "./src/pages/Pops";
import About from "./src/pages/About";
import FilterBy from "./src/pages/FilterBy.jsx";

const router = createBrowserRouter([
  {
    element: <RootCmp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Pops",
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
