import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useState } from "react";

function Fandoms() {
  const pops = useSelector((state) => state.pop.pops);

  const [selectedCategory, setSelectedCategory] = useState("MARVEL");
  const [selectedPrice, setSelectedPrice] = useState(12);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(Number(event.target.value));
  };

  const priceFilter = pops.filter((pop) => pop.price === selectedPrice);

  console.log(priceFilter);

  return (
    <div className="">
      <div className="bg-stone-100 p-10 flex flex-wrap ">
        <div className="p-3">
          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="MARVEL">MARVEL</option>
            <option value="DRAGON BALL Z">DRAGON BALL Z</option>
          </select>
        </div>
        <div className="p-3">
          <select name="price" id="price" onChange={handlePriceChange}>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </div>

        <Card
          pops={pops.filter(
            (pop) =>
              pop.category === selectedCategory && pop.price === selectedPrice
          )}
          startIndex={0}
          endIndex={20}
        />
      </div>
    </div>
  );
}

export default Fandoms;
