import { useDispatch, useSelector } from "react-redux";

import CartList from "../components/CartList";
import { useEffect } from "react";
import { fetchPops } from "../store/popAction";
import Summary from "../components/Summary";
import { useAuth } from "../components/useAuth";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handelClick = () => {
    navigate("/signin");
  };

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  return (
    <div className="font-sans">
      <div className=" text-4xl pb-10  pt-8 pl-7">MY CART</div>
      {user ? (
        <div className="flex w-full h-full ">
          <CartList pops={pops.filter((pop) => pop.inCart === true)} />
          <Summary pops={pops.filter((pop) => pop.inCart === true)} />
        </div>
      ) : (
        <div>
          <h1>you have to log in to be able to see your cart!</h1>
          <button onClick={() => handelClick()}>Log In</button>
        </div>
      )}
    </div>
  );
}
export default Cart;
