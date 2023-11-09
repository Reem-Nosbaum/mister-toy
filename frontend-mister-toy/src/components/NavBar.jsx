import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/site-logo.svg";
import heart from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import cart from "../assets/images/bag.svg";
import { DropDownMenu } from "./dropDownMenu";

function NavBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFandomsDropDownVisible, setIsFandomsDropDownVisible] =
    useState(false);
  const [isCategoryDropDownVisible, setIsCategoryDropDownVisible] =
    useState(false);

  return (
    <>
      <nav className="bg-stone-900 text-white sans-serif flex justify-between w-full pr-16 pl-16 relative z-20">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </Link>
          <div className="inline-flex w-30 h-14 mt-6">
            <Link
              to="/fandoms"
              className="mr-2 ml-6 p-4 font-semibold hover:bg-white hover:text-stone-800"
              onMouseEnter={() => setIsFandomsDropDownVisible(true)}
              onMouseLeave={() => setIsFandomsDropDownVisible(false)}
            >
              FANDOMS
              <DropDownMenu
                isVisible={isFandomsDropDownVisible}
                type={"fandoms"}
              />
            </Link>

            <Link
              to="/category"
              className="mr-4 ml-4 p-4 font-semibold hover:bg-white hover:text-stone-800"
              onMouseEnter={() => setIsCategoryDropDownVisible(true)}
              onMouseLeave={() => setIsCategoryDropDownVisible(false)}
            >
              CATEGORY
              <DropDownMenu
                isVisible={isCategoryDropDownVisible}
                type={"category"}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <input
            type="search"
            className={`text-stone-900 rounded-full outline-0 transition-all duration-300   ${
              isSearchFocused ? "w-64" : ""
            }`}
            placeholder={"SEARCH"}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            style={{
              paddingLeft: "1rem",
              fontFamily: "sans-serif",
            }}
          />
          <Link to="/wishlist" className="">
            <img src={heart} alt="heart" style={{ width: "40px" }} />
          </Link>
          <Link to="/login" className="">
            <img src={user} alt="user" style={{ width: "30px" }} />
          </Link>
          <Link to="/cart" className="">
            <img src={cart} alt="cart" style={{ width: "40px" }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
