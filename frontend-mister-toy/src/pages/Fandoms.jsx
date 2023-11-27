import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { fetchPops } from "../store/popAction";
import { useLocation } from "react-router-dom";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function Fandoms() {
  const location = useLocation();

  const pops = useSelector((state) => state.pop.pops);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPops());
  }, [dispatch]);

  useEffect(() => {
    const categoryFromPath = location.pathname.split("/")[2];
    setSelectedCategory(categoryFromPath || "");
  }, [location.pathname]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setIsCategoryVisible(false);
  };

  const handlePriceChange = (value) => {
    setSelectedPrice(value);
    setIsPriceVisible(false);
  };

  return (
    <div>
      <h1 className="text-6xl pt-2 pl-3 pb-3 font-sans">Fandoms</h1>
      {selectedCategory !== "shop-all" && (
        <>
          <div className="relative z-10 text-lg">
            <ul
              className="absolute bg-stone-100 border-4 border-stone-800 w-40 cursor-pointer left-24 text-2xl text-center"
              onMouseEnter={() => setIsCategoryVisible(true)}
              onMouseLeave={() => setIsCategoryVisible(false)}
            >
              Category
              {isCategoryVisible && (
                <>
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handleCategoryChange("movies&tv")}
                  >
                    All
                  </li>
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handleCategoryChange("MARVEL")}
                  >
                    MARVEL
                  </li>
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handleCategoryChange("DRAGON BALL Z")}
                  >
                    DRAGON BALL Z
                  </li>{" "}
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handleCategoryChange("INDIANA JONES")}
                  >
                    INDIANA JONES
                  </li>{" "}
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handleCategoryChange("POWER RANGERS")}
                  >
                    POWER RANGERS
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="relative z-10 text-lg">
            <ul
              className="absolute bg-stone-100 border-4 border-stone-800 w-40 cursor-pointer left-72 text-2xl text-center"
              onMouseEnter={() => setIsPriceVisible(true)}
              onMouseLeave={() => setIsPriceVisible(false)}
            >
              Price
              {isPriceVisible && (
                <>
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handlePriceChange("lowToHigh")}
                  >
                    Price Low To High
                  </li>
                  <li
                    className="hover:bg-stone-400 cursor-pointer"
                    onClick={() => handlePriceChange("highToLow")}
                  >
                    Price High To Low
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      )}

      <div className="bg-stone-100 p-10 flex flex-wrap">
        <Card
          pops={
            selectedCategory === "shop-all"
              ? shuffleArray(pops).slice(0, 50)
              : pops
                  .filter(
                    (pop) =>
                      (pop.productType === "Pop!" &&
                        selectedCategory === "movies&tv") ||
                      (pop.category === selectedCategory &&
                        pop.productType === "Pop!")
                  )
                  .sort((a, b) => {
                    if (selectedPrice === "lowToHigh") {
                      return a.price - b.price;
                    } else if (selectedPrice === "highToLow") {
                      return b.price - a.price;
                    }
                    return 0;
                  })
          }
          startIndex={0}
          endIndex={50}
        />
      </div>
    </div>
  );
}

export default Fandoms;
