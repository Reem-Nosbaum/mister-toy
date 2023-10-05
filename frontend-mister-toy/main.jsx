import React from "react";
import ReactDOM from "react-dom/client";

import "./src/assets/Main.module.css";
import { router } from "./src/routs";
import { RouterProvider } from "react-router-dom";
import { store } from "./src/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
