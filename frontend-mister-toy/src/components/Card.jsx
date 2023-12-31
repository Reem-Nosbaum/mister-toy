import { useState } from "react";
import Button from "../assets/styles/Button";
import { useCart } from "./CartContext";

import { useNavigate } from "react-router-dom";

const Card = ({ pops, startIndex, endIndex }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { cart, updateCart } = useCart();
  const cartIds = cart.map((pop) => pop.id);

  const navigate = useNavigate();

  const handleMouseOver = (popId) => {
    setHoveredProductId(popId);
  };

  const handleMouseOut = () => {
    setHoveredProductId(null);
  };

  const handelPopClick = (pop) => {
    navigate(`/pop-preview/${pop.id}`);
  };

  const handleAddToCart = (pop) => {
    const updatedPop = { ...pop, inCart: true };
    updateCart([updatedPop, ...cart]);
  };

  const handleQuantityChange = (pop, quantity) => {
    const updatedPop = { ...pop, QTY: quantity };
    updateCart((prevCart) =>
      prevCart.map((item) => (item.id === pop.id ? updatedPop : item))
    );

    const updatedCart = cart.map((item) =>
      item.id === pop.id ? { ...item, QTY: quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!pops) return <h1>loading</h1>;
  return (
    <div className="flex flex-wrap items-center gap-3 justify-center">
      {pops.slice(startIndex, endIndex).map((pop) => (
        <div
          key={pop.id}
          className="text-black w-72 border-stone-100 border-4 rounded-xl flex flex-col bg-white mb-4 "
        >
          <img
            onClick={() => handelPopClick(pop)}
            src={hoveredProductId === pop.id ? pop.image2 : pop.image1}
            alt={pop.category}
            className="w-64 h-64 hover:scale-110 cursor-pointer"
            onMouseOver={() => handleMouseOver(pop.id)}
            onMouseOut={handleMouseOut}
          />
          <h3 className="font-sans text-sm pl-3 pt-4">{pop.category}</h3>
          <h1 className="ml-3 mr-3 overflow-hidden whitespace-no-wrap truncate font-semibold">
            {pop.type}
          </h1>
          <br />
          <h3 className="  text-lg pl-3">${pop.price}.00</h3>
          <div className="flex items-center flex-col pb-3 pt-7">
            <Button
              text={!cartIds.includes(pop.id) ? "ADD TO CART" : "IN CART"}
              onClick={() => handleAddToCart(pop)}
              inCart={!cartIds.includes(pop.id) ? false : true}
            />
          </div>
          {cartIds.includes(pop.id) ? (
            <div className=" absolute">
              <select
                value={cart.find((item) => item.id === pop.id)?.QTY}
                className="top-[403px] left-8 relative rounded-full w-14 text-center cursor-pointer"
                onChange={(e) => handleQuantityChange(pop, e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
