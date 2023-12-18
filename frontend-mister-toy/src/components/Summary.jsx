import Button from "../assets/styles/Button";
import { useCart } from "../components/CartContext";

function Summary() {
  const { cart } = useCart();

  let shipping = 0;

  const subtotal = cart.reduce((acc, pop) => acc + pop.price * pop.QTY, 0);
  let totalPrice = subtotal * cart.length;
  if (subtotal < 30) shipping += 17;
  totalPrice = subtotal + shipping;

  console.log("subtotal", subtotal);
  console.log("totalPrice", totalPrice);
  console.log("shipping", shipping);
  console.log("cart length", cart.length);

  return (
    <div className="w-[500px] h-full bg-stone-200 rounded-lg ml-52 font-sans">
      <div className="border-b border-stone-500 flex justify-between ">
        <h1 className="text-2xl pl-3 pt-3">SUMMARY</h1>
        <h1 className="font-sans_Regular text-lg pr-3 pt-3">
          {cart.length} ITEMS
        </h1>
      </div>
      {cart.map((pop) => (
        <div key={pop.id} className="flex justify-between"></div>
      ))}
      <div className="flex justify-between">
        <h1 className="text-xl pl-3 pt-3 font-sans_Regular">SUBTOTAL</h1>
        <h1 className="font-sans_Regular text-lg pr-3 pt-3">
          ${subtotal.toFixed(2)}
        </h1>
      </div>
      <div className="flex justify-between">
        <h1 className="text-xl pl-3 pt-3 font-sans_Regular">SHIPPING</h1>
        <h1 className="font-sans_Regular text-lg pr-3 pt-3">${shipping}.00</h1>
      </div>
      <div className="flex pl-3 ">
        <h3 className="font-sans_Regular text-red-600 text-lg">
          {subtotal > 30 ? "shipping is free!" : "after $30 shipping is free!"}
        </h3>
      </div>
      <div className="flex justify-between">
        <h1 className="text-2xl pl-3 pt-3">Estimated Total</h1>
        <h1 className="text-xl pr-3 pt-3">${totalPrice.toFixed(2)}</h1>
      </div>
      <div className="flex items-center justify-center p-3">
        <Button text={"CHECKOUT"} display={true} />
      </div>
    </div>
  );
}

export default Summary;
