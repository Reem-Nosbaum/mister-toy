import Button from "../assets/styles/Button";

function Card() {
  return (
    <div className="text-black w-64 h-[27rem] border-stone-100 border-4 rounded-xl flex  m-3 flex-col overflow-hidden">
      <img src="" alt="" className="w-80 h-64 hover:scale-110 " />
      <h3 className="font-sans_Regular text-sm pl-3 pt-4"></h3>
      <h1 className="pl-3"></h1>
      <br />
      <h3 className="font-sans_Regular text-lg pl-3">$</h3>
      <div className="flex items-center flex-col pt-2">
        <Button text="ADD TO CART" />
      </div>
    </div>
  );
}

export default Card;
