import { Link } from "react-router-dom";
import logo from "../assets/images/site-logo.svg";
import heart from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import cart from "../assets/images/shopping-cart.svg";
import { useState } from "react";

function NavBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="bg-stone-900 text-white">
      <div className="flex items-center">
        <Link to="/" className="ml-8">
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </Link>
        <div className="inline-flex w-30 h-14 mt-6">
          <Link
            to="/fandoms"
            className="mr-4 ml-4 p-4 font-semibold hover:bg-white hover:text-stone-800"
          >
            FANDOMS
          </Link>
          <Link
            to="/category"
            className="mr-4 ml-4 p-4 font-semibold hover:bg-white hover:text-stone-800"
          >
            CATEGORY
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center mr-8">
          <input
            type="search"
            className={` text-black mr-16 rounded-full outline-0 transition-all duration-300 ${
              isSearchFocused ? "w-64" : ""
            }`}
            placeholder="Search"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <Link to="/wishlist" className="mr-4">
            <img src={heart} alt="heart" style={{ width: "45px" }} />
          </Link>
          <Link to="/login" className="mr-4">
            <img src={user} alt="user" style={{ width: "40px" }} />
          </Link>
          <Link to="/cart" className="">
            <img src={cart} alt="cart" style={{ width: "40px" }} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
