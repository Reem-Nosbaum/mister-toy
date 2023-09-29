// INSPIR URL: https://funko.com/

import { Outlet } from "react-router-dom";
import NavBar from "./pages/NavBar";

export function RootCmp() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
