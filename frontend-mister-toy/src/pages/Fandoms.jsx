import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { fetchPops } from "../store/popSlice";

// ...

function Fandoms() {
  const pops = useSelector((state) => state.pop.pops);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="">
      <div className="bg-stone-100 p-10 flex flex-wrap ">
        <div className="p-3">
          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="">Category</option>
            <option value="MARVEL">MARVEL</option>
            <option value="DRAGON BALL Z">DRAGON BALL Z</option>
          </select>
          <select name="price" id="price" onChange={handlePriceChange}>
            <option value="">Price</option>
            <option value="lowToHigh">Price Low To High</option>
            <option value="highToLow">Price High To Low</option>
          </select>
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
    </div>
  );
}

export default Fandoms;
