import { useDispatch } from "react-redux";
import Trash from "../assets/styles/Trash";
import { removeCart, updateCart } from "../store/popAction";
import { useAuth } from "./useAuth";

function CartList({ pops }) {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleRemoveFromCart = (pop) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = cart.filter((item) => item.id !== pop.id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const removePop = { ...pop, inCart: false, QTY: 1 };
    dispatch(removeCart(removePop));
  };

  const handleQuantityChange = (pop, quantity) => {
    const updatedPop = { ...pop, QTY: quantity };
    dispatch(updateCart(updatedPop));

    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = existingCartItems.map((item) =>
      item.id === pop.id ? { ...item, QTY: quantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className="flex flex-col  w-[55rem] pl-8 ">
        <div className="border-b border-stone-950 flex font-sans_Regular items-center">
          <h1 className="">ITEM</h1>
          <div className="flex w-full justify-end  space-x-52 ">
            <h1 className="">QTY</h1>
            <h1 className="">TOTAL</h1>
          </div>
        </div>
        {pops.map((pop) => (
          <div
            key={pop.id}
            className="flex items-center border-b border-stone-950"
          >
            <div className="flex w-full items-center ">
              <img src={pop.image1} alt={pop.category} className="w-40 h-40" />
              <h3 className="font-sans_Regular text-sm pl-16">
                {pop.category} <br />
                <div className=" font-semibold text-lg">{pop.type}</div>
              </h3>
            </div>
            <div className="pl-10">
              <button onClick={() => handleRemoveFromCart(pop)}>
                <Trash />
              </button>
            </div>
            <div className="flex w-full  justify-end space-x-52">
              <select
                value={pop.QTY}
                onChange={(e) => handleQuantityChange(pop, e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>

              <h3 className="font-sans_Regular text-lg ">
                ${pop.QTY * pop.price}.00
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartList;
