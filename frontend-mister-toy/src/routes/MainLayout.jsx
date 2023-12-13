import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="main-layout w-full h-full flex flex-col grow">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
