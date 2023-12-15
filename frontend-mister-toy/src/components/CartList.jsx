import Trash from "../assets/styles/Trash";

import { useCart } from "../components/CartContext";

function CartList() {
  const { cart, removeCartItem, updateCart } = useCart();

  const handleRemoveFromCart = (pop) => {
    removeCartItem(pop.id);
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
        {cart.map((pop) => (
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
                value={cart.find((item) => item.id === pop.id)?.QTY}
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
