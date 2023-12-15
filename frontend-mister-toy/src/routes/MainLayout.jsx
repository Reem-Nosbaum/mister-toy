import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartContext";

function MainLayout() {
  return (
    <div className="main-layout w-full h-full flex flex-col grow">
      <CartProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
}
export default MainLayout;
