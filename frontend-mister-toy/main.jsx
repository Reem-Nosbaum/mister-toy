import ReactDOM from "react-dom/client";
import { router } from "./src/routes/Routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
