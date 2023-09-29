import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootCmp } from "./src/RootCmp";
import Home from "./src/pages/home";
import Toys from "./src/pages/Toys";

const router = createBrowserRouter([
  {
    element: <RootCmp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Toys",
        element: <Toys />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
