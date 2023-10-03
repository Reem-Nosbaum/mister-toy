import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPops } from "../services/PopSlice.js";

function PopList() {
  const dispatch = useDispatch();
  const Pops = useSelector((state) => state.Pops);

  function LoadPop() {
    fetch("http://localhost:8000/funko_pops")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPops(data.slice(0, 15)));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    if (!Pops.length) LoadPop();
  }, []);

  return (
    <div>
      <ul>
        {Pops.map((pop) => (
          <div key={pop.handle}>
            <img src={pop.imageName} alt={pop.title} />
            <h2>{pop.title}</h2>
            <p>Series: {pop.series.join(", ")}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PopList;
