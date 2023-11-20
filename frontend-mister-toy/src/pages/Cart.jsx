import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import CartList from "../components/CartList";
import { useEffect } from "react";
import { fetchPops } from "../store/popSlice";

function Cart() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  return (
    <div>
      <div className="text-4xl pb-10 pt-1 flex flex-col">MY CART</div>
      <div className="flex gap-52">
        <h1 className="text-sm font-serif flex items-start pl-2">ITEM</h1>
        <h1 className="text-sm font-serif">QTY</h1>
        <h1 className="text-sm font-serif pr-3">TOTAL</h1>
      </div>

      <div className=" border-b border-stone-950 my-2"></div>
      <CartList pops={pops} />
    </div>
  );
}
export default Cart;
