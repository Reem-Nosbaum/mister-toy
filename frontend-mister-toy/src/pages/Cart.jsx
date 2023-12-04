import { useDispatch, useSelector } from "react-redux";

import CartList from "../components/CartList";
import { useEffect } from "react";
import { fetchPops } from "../store/popAction";
import Summary from "../components/Summary";

function Cart() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  return (
    <div className="font-sans">
      <div className=" text-4xl pb-10  pt-8 pl-7">MY CART</div>
      <div className="flex w-full h-full ">
        <CartList pops={pops.filter((pop) => pop.inCart === true)} />
        <Summary pops={pops.filter((pop) => pop.inCart === true)} />
      </div>
    </div>
  );
}
export default Cart;
