import { useDispatch } from "react-redux";
import Trash from "../assets/styles/Trash";
import { removeCart } from "../store/popAction";

function CartList({ pops }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (pop) => {
    const removePop = { ...pop, inCart: "false" };
    dispatch(removeCart(removePop));
    console.log(removePop.inCart);
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
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <h3 className="font-sans_Regular text-lg ">${pop.price}.00</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartList;
