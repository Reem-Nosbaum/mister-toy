import { useSelector } from "react-redux";
import Card from "../components/Card";

function Fandoms() {
  const pops = useSelector((state) => state.pop.pops);

  return (
    <div className="">
      Shop All
      <div className=" w-full h-[700px] flex justify-center items-center  grid-cols-4 gap-4">
        <div className="bg-stone-300 ">
          Fandoms
          <Card pops={pops} startIndex={0} endIndex={5} />
        </div>
      </div>
    </div>
  );
}

export default Fandoms;
