import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import CartList from "../components/CartList";
import { useEffect } from "react";
import { fetchPops } from "../store/popSlice";
import Summary from "../components/Summary";

function Cart() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  return (
    <div className="">
      <div className=" text-4xl pb-10  pt-8">MY CART</div>
      <div className="flex w-full h-full ">
        <CartList pops={pops} />
        <Summary />
      </div>
    </div>
  );
}
export default Cart;
