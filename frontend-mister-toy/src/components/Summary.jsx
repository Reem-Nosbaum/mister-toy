import Button from "../assets/styles/Button";

function Summary() {
  return (
    <div className="w-[500px] h-full bg-stone-200 rounded-lg ml-52">
      <div className="border-b border-stone-500 flex justify-between ">
        <h1 className="text-2xl pl-3 pt-3 ">SUMMARY</h1>
        <h1 className=" font-sans_Regular text-lg pr-3 pt-3">11 ITEMS</h1>
      </div>
      <div className="flex  justify-between">
        <h1 className=" text-xl pl-3 pt-3 font-sans_Regular">SUBTOTAL</h1>
        <h1 className=" font-sans_Regular text-lg pr-3 pt-3">$165.00</h1>
      </div>
      <div className="flex  justify-between">
        <h1 className=" text-xl pl-3 pt-3 font-sans_Regular">SHIPPING</h1>
        <h1 className=" font-sans_Regular text-lg pr-3 pt-3">free</h1>
      </div>
      <div className="flex  justify-between">
        <h1 className=" text-2xl pl-3 pt-3">Estimated Total</h1>
        <h1 className="  text-xl pr-3 pt-3">$165.00</h1>
      </div>
      <div className="flex items-center justify-center p-3">
        <Button text={"CHECKOUT"} display={true} />
      </div>
    </div>
  );
}

export default Summary;
