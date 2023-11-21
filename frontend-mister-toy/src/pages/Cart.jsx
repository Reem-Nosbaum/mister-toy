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
      <div className="text-4xl pb-10  pt-8">MY CART</div>
      <div className="flex">
        <CartList pops={pops} />
        <div className="w-full h-96 bg-stone-600 items-center  justify-center flex">
          SUMMARY
        </div>
      </div>
    </div>
  );
}
export default Cart;
