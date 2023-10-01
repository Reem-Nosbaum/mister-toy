import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootCmp } from "./src/RootCmp";
import Home from "./src/pages/home";
// import Pops from "./src/pages/Pops";
import About from "./src/pages/About";
import FilterBy from "./src/pages/FilterBy.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import PopList from "./src/components/PopList";
import { Provider } from "react-redux";
import store from "././src/store/store";

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
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
