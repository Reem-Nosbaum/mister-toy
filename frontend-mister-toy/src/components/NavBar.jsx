import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/site-logo.svg";
import user from "../assets/images/user.svg";
import cartImg from "../assets/images/bag.svg";
import { DropDownMenu } from "./dropDownMenu";
import { useSelector } from "react-redux";
import { useCart } from "./CartContext";

function NavBar() {
  const { cart } = useCart();

  const pops = useSelector((state) => state.pop.pops);
  const popsQTYCart = cart.map((pop) => pop.QTY);
  console.log("popsQTYCart", popsQTYCart);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isFandomsDropDownVisible, setIsFandomsDropDownVisible] =
    useState(false);
  const [isCategoryDropDownVisible, setIsCategoryDropDownVisible] =
    useState(false);

  const filteredPops = pops.filter(
    (pop) =>
      pop.type.toLowerCase().includes(search.trim().toLowerCase()) ||
      pop.category.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handelPopClick = (pop) => {
    navigate(`/pop-preview/${pop.id}`);
  };

  let totalItemsInCart = 0;

  popsQTYCart.forEach((pop) => {
    const quantity = pop;

    console.log("quantity", quantity);
    totalItemsInCart += Number(quantity);
  });
  const handleSearchBlur = () => {
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };
  return (
    <>
      <nav className="bg-stone-900 text-white font-sans flex justify-between w-full pr-16 pl-16  z-20">
        <div className="flex items-center ">
          <Link to="/">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </Link>
          <div className="inline-flex w-30 h-14 mt-6  ">
            <div
              className="mr-2 ml-6 p-4 font-semibold hover:bg-white hover:text-stone-800 cursor-pointer "
              onMouseEnter={() => setIsFandomsDropDownVisible(true)}
              onMouseLeave={() => setIsFandomsDropDownVisible(false)}
            >
              FANDOMS
              <DropDownMenu
                isVisible={isFandomsDropDownVisible}
                type={"fandoms"}
              />
            </div>

            <div
              className="mr-4 ml-4 p-4 font-semibold hover:bg-white hover:text-stone-800  cursor-pointer"
              onMouseEnter={() => setIsCategoryDropDownVisible(true)}
              onMouseLeave={() => setIsCategoryDropDownVisible(false)}
            >
              CATEGORY
              <DropDownMenu
                isVisible={isCategoryDropDownVisible}
                type={"category"}
              />
            </div>
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
            onBlur={handleSearchBlur}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              paddingLeft: "1rem",
              fontFamily: "sans-serif",
            }}
          />
          <div
            className={`w-64 h-[500px] bg-stone-200 top-16 absolute rounded-md  overflow-auto		 ${
              isSearchFocused ? "block" : " hidden"
            }`}
          >
            <h1 className="text-xl font-sans border-b text-stone-950 pl-4 border-stone-950">
              PRODUCTS
            </h1>
            <div>
              {filteredPops.map((filteredPop) => (
                <div
                  className="pb-4 pt-2 flex items-center border-b border-stone-950 cursor-pointer  "
                  key={filteredPop.id}
                  onClick={() => handelPopClick(filteredPop)}
                >
                  <img
                    className="w-20 h-20 hover:scale-110"
                    src={filteredPop.image1}
                    alt={filteredPop.category}
                  />
                  <div>
                    <h2 className="text-stone-950 font-sans_Regular text-sm">
                      {filteredPop.category}
                    </h2>
                    <h2 className="text-stone-950 font-sans text-lg">
                      {filteredPop.type}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="signin">
            <img src={user} alt="user" style={{ width: "30px" }} />
          </Link>
          <Link to="/cart" className="">
            <div
              className={`absolute top-[30px] ${
                totalItemsInCart < 10 ? "right-[82px]" : "right-[77px]"
              } text-white`}
            >
              {totalItemsInCart}
            </div>
            <img src={cartImg} alt="cart" style={{ width: "45px" }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
