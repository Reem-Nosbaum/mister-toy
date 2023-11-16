import { useSelector } from "react-redux";
import Card from "../components/Card";

function Fandoms() {
  const pops = useSelector((state) => state.pop.pops);

  return (
    <div className="">
      Shop All
      <div className="bg-stone-100 p-10 flex flex-wrap ">
        Fandoms
        <Card pops={pops} startIndex={0} endIndex={20} />
      </div>
    </div>
  );
}

export default Fandoms;
