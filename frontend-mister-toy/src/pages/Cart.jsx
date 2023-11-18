function Cart() {
  return (
    <div>
      <div className="text-4xl pb-10 pt-1">MY CART</div>
      <div className="flex justify-between">
        <h1 className=" text-sm font-serif flex items-start pl-2">ITEM</h1>
        <h1 className=" text-sm font-serif">QTY</h1>
        <h1 className=" text-sm font-serif right-96 relative">TOTAL</h1>
      </div>
      <div className="border-b border-stone-950 my-1"></div>
    </div>
  );
}
export default Cart;
