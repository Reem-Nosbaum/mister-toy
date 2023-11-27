import { useEffect, useState } from "react";
import Button from "../assets/styles/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchPops, updateCart } from "../store/popAction";

function PopPreview(popId) {
  const pops = useSelector((state) => state.pop.pops);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  const handleAddToCart = (pop) => {
    const updatedPop = { ...pop, inCart: "true" };
    dispatch(updateCart(updatedPop));

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    existingCartItems.push(updatedPop);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
  };

  return (
    <div className="flex flex-row" onClick={() => Navigate("")}>
      {pops.slice(1, 2).map((pop) => (
        <div className="flex flex-row" key={pop.id}>
          <img
            src={pop.selectedImage}
            alt={"pop"}
            className="w-[700px] h-[700px] bg-stone-100"
          />
          <div className=" absolute left-1 top-24 cursor-pointer border-2 border-stone-800">
            <img
              src={pop.image1}
              alt={"pop"}
              className="w-[100px] h-[100px] "
            />
          </div>
          <div className=" absolute top-52 left-1 cursor-pointer border-2 border-stone-800">
            <img
              src={pop.image2}
              alt={"pop"}
              className="w-[100px] h-[100px] "
            />
          </div>

          <div className="pl-10 pt-10 flex flex-col gap-7 justify-center">
            <h1 className="text-lg">{pop.category}</h1>
            <h2 className="text-4xl font-semibold font-sans">{pop.type}</h2>
            <h3 className="text-lg">{pop.details}</h3>
            <h3 className="text-2xl ">${pop.price}.00</h3>
            <div className=" pl-32">
              <Button
                text={
                  pop.inCart === "false" || pop.inCart === false
                    ? "ADD TO CART"
                    : "IN CART"
                }
                onClick={() => handleAddToCart(pop)}
                inCart={pop.inCart}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopPreview;
