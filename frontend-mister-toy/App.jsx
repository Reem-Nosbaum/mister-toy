import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootCmp } from "./src/RootCmp";
import Home from "./src/pages/home";
// import Pops from "./src/pages/Pops";
import About from "./src/pages/About";
import FilterBy from "./src/pages/FilterBy.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PopList from "./src/components/PopList";

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
        element: <PopList />,
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
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
