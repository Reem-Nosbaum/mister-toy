import Trash from "../assets/styles/Trash";

function CartList({ pops }) {
  return (
    <div>
      <div className="flex flex-col p-10">
        {pops.slice(0, 2).map((pop) => (
          <div key={pop.id} className="flex items-center">
            <img src={pop.image1} alt={pop.category} className="w-40 h-40" />
            <div className="ml-3">
              <h3 className="font-sans_Regular text-sm pt-4">{pop.category}</h3>
              <h1 className="overflow-hidden whitespace-no-wrap truncate">
                {pop.type}
              </h1>
              <div className=" relative left-72 bottom-7">
                <Trash />
              </div>
              <select className="relative left-96 bottom-12">
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
              <h3 className="font-sans_Regular text-lg relative left-[600px] bottom-20">
                ${pop.price}.00
              </h3>
            </div>
          </div>
        ))}
        <div className=" border-b border-stone-950 my-2"></div>
      </div>
    </div>
  );
}

export default CartList;
