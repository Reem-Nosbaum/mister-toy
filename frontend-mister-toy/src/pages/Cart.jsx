import { useDispatch, useSelector } from "react-redux";

import CartList from "../components/CartList";
import { useEffect } from "react";
import { fetchPops } from "../store/popAction";
import Summary from "../components/Summary";
import { useAuth } from "../components/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "../assets/styles/Button";

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
      <div className=" text-4xl pb-10  pt-8 pl-7">MY CART </div>
      {user ? (
        <div className="flex w-full h-full ">
          <CartList pops={pops.filter((pop) => pop.inCart === true)} />
          <Summary pops={pops.filter((pop) => pop.inCart === true)} />
        </div>
      ) : (
        <div>
          <h1 className=" font-sans text-3xl flex justify-center pt-10 ">
            You have to log in to be able to see your cart
          </h1>
          <div className="flex justify-center p-10 w-full">
            <Button onClick={() => handelClick()} text="Log In"></Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
