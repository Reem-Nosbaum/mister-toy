import Button from "../assets/styles/Button";
import { useState } from "react";

const Card = ({ pops, startIndex, endIndex }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseOver = (popId) => {
    setHoveredProductId(popId);
  };

  const handleMouseOut = () => {
    setHoveredProductId(null);
  };

  const handleAddToCart = (pop) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartItems.push(pop);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  return (
    <div className="flex flex-wrap items-center gap-3 justify-center">
      {pops.slice(startIndex, endIndex).map((pop) => (
        <div
          key={pop.id}
          className="text-black w-72 border-stone-100 border-4 rounded-xl flex flex-col bg-white mb-4"
        >
          <img
            src={hoveredProductId === pop.id ? pop.image2 : pop.image1}
            alt={pop.category}
            className="w-64 h-64 hover:scale-110"
            onMouseOver={() => handleMouseOver(pop.id)}
            onMouseOut={handleMouseOut}
          />
          <h3 className="font-sans_Regular text-sm pl-3 pt-4">
            {pop.category}
          </h3>
          <h1 className="ml-3 mr-3 overflow-hidden whitespace-no-wrap truncate">
            {pop.type}
          </h1>
          <br />
          <h3 className="font-sans_Regular text-lg pl-3">${pop.price}.00</h3>
          <div className="flex items-center flex-col pb-3 pt-7">
            <Button
              text={"ADD TO CART"}
              onClick={() => handleAddToCart(pop)}
              disabled={true} // Fix the prop name here
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
