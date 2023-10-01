// INSPIR URL: https://funko.com/

import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export function RootCmp() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
