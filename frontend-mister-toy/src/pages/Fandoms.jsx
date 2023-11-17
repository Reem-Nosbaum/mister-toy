import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { fetchPops } from "../store/popSlice";

function Fandoms() {
  const pops = useSelector((state) => state.pop.pops);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const dispatch = useDispatch();

  console.log(selectedCategory);
  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
  };

  return (
    <div className="bg-stone-100 p-10 flex flex-wrap ">
      <div className="flex flex-col">
        <h1 className=" mb-2 text-lg">Select an Category</h1>
        <ul className="bg-stone-200 ">
          <li
            className="hover:bg-stone-100 cursor-pointer "
            onClick={() => handleCategoryChange("")}
          >
            All
          </li>
          <li
            className="hover:bg-stone-100 cursor-pointer"
            onClick={() => handleCategoryChange("MARVEL")}
          >
            MARVEL
          </li>
          <li
            className="hover:bg-stone-100 cursor-pointer"
            onClick={() => handleCategoryChange("DRAGON BALL Z")}
          >
            DRAGON BALL Z
          </li>
        </ul>
      </div>
      <div className="flex flex-col pl-8">
        <h1 className=" mb-2 text-lg">Select an Price</h1>
        <ul className="bg-stone-200 w-full h-full">
          <li
            className="hover:bg-stone-100 cursor-pointer"
            onClick={() => handlePriceChange("lowToHigh")}
          >
            Price Low To High
          </li>
          <li
            className="hover:bg-stone-100 cursor-pointer"
            onClick={() => handlePriceChange("highToLow")}
          >
            Price High To Low
          </li>
        </ul>
      </div>

      <Card
        pops={pops
          .filter(
            (pop) =>
              selectedCategory === "" || pop.category === selectedCategory
          )
          .sort((a, b) => {
            if (selectedPrice === "lowToHigh") {
              return a.price - b.price;
            } else if (selectedPrice === "highToLow") {
              return b.price - a.price;
            }
            return 0;
          })}
        startIndex={0}
        endIndex={20}
      />
    </div>
  );
}

export default Fandoms;
