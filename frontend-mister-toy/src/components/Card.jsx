import { useState } from "react";
import Button from "../assets/styles/Button";

import { useDispatch } from "react-redux";
import { updateCart } from "../store/popAction";

const Card = ({ pops, startIndex, endIndex }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const dispatch = useDispatch();
  const handleMouseOver = (popId) => {
    setHoveredProductId(popId);
  };

  const handleMouseOut = () => {
    setHoveredProductId(null);
  };

  const handleAddToCart = (pop) => {
    const updatedPop = { ...pop, inCart: "true" };
    dispatch(updateCart(updatedPop));
    console.log(updatedPop.inCart);

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartItems.push(updatedPop);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  if (!pops) return <h1>loading</h1>;
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
          <h3 className="  text-lg pl-3">${pop.price}.00</h3>
          <div className="flex items-center flex-col pb-3 pt-7">
            <Button
              text={pop.inCart === "false" ? "ADD TO CART" : "IN CART"}
              onClick={() => handleAddToCart(pop)}
              inCart={pop.inCart}
            />
          </div>
          {pop.inCart === "true" ? (
            <div className=" absolute">
              <select className=" top-[403px] left-8 relative rounded-full w-14 text-center cursor-pointer">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
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
