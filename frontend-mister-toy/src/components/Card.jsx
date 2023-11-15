import Button from "../assets/styles/Button";

const Card = ({ products }) => {
  console.log("Card Received Products:", products);

  return (
    <div className="flex flex-wrap">
      {products &&
        products.map((product) => (
          <div
            key={product.id}
            className="text-black w-64 h-[27rem] border-stone-100 border-4 rounded-xl flex m-3 flex-col overflow-hidden"
          >
            <img
              src={product.image1}
              alt={product.category}
              className="w-80 h-64 hover:scale-110"
            />
            <h3 className="font-sans_Regular text-sm pl-3 pt-4">
              {product.category}
            </h3>
            <h1 className="pl-3">{product.type}</h1>
            <br />
            <h3 className="font-sans_Regular text-lg pl-3">${product.price}</h3>
            <div className="flex items-center flex-col pt-2">
              <Button text="ADD TO CART" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
