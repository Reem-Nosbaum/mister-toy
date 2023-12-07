import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../context/AuthContext";

function MainLayout() {
  return (
    <div className="main-layout w-full h-full flex flex-col grow">
      <AuthContextProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}
export default MainLayout;
