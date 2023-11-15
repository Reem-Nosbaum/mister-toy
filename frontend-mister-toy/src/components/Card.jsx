import Button from "../assets/styles/Button";
import { useState } from "react";

const Card = ({ products }) => {
  console.log("Card Received Products:", products);

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const handleMouseOver = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseOut = () => {
    setHoveredProductId(null);
  };

  return (
    <div className="flex flex-wrap">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="text-black max-w-64 h-[27rem] border-stone-100 border-4 rounded-xl flex m-3 flex-col "
          >
            <img
              src={
                hoveredProductId === product.id
                  ? product.image2
                  : product.image1
              }
              alt={product.category}
              className=" max-w-80 max-h-64 hover:scale-110"
              onMouseOver={() => handleMouseOver(product.id)}
              onMouseOut={handleMouseOut}
            />
            <h3 className="font-sans_Regular text-sm pl-3 pt-4">
              {product.category}
            </h3>
            <h1 className="ml-3 mr-3">{product.type}</h1>
            <br />
            <h3 className="font-sans_Regular text-lg pl-3">
              ${product.price}.00
            </h3>
            <div className="flex items-center flex-col pt-2">
              <Button text="ADD TO CART" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
