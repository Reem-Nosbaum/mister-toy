import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPops } from "../services/PopSlice.js";

function PopList() {
  const dispatch = useDispatch();
  const Pops = useSelector((state) => state.Pops);

  useEffect(() => {
    fetch("http://localhost:8000/funko_pops")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPops(data.slice(0, 4)));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);
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
