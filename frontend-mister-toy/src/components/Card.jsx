import Button from "../assets/styles/Button";
import { useState } from "react";

const Card = ({ products }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const handleMouseOver = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseOut = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="flex items-center ">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="text-black w-64  border-stone-100 border-4 rounded-xl flex flex-col "
          >
            <img
              src={
                hoveredProductId === product.id
                  ? product.image2
                  : product.image1
              }
              alt={product.category}
              className=" w-72  h-64 hover:scale-110"
              onMouseOver={() => handleMouseOver(product.id)}
              onMouseOut={handleMouseOut}
            />
            <h3 className="font-sans_Regular text-sm pl-3 pt-4">
              {product.category}
            </h3>
            <div className="max-w-xs max-h-xs">
              <h1 className="ml-3 mr-3 ">{product.type}</h1>
            </div>
            <br />
            <h3 className="font-sans_Regular text-lg pl-3">
              ${product.price}.00
            </h3>
            <div className="flex items-center flex-col ">
              <Button text="ADD TO CART" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
