import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="main-layout  w-full h-full ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
