import { useState, useEffect } from "react";

function PopList() {
  const [funkoPops, setFunkoPops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/funko_pops")
      .then((response) => response.json())
      .then((data) => setFunkoPops(data.slice(0, 7)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>
        {funkoPops.map((pop) => (
          <li key={pop.handle}>
            <img src={pop.imageName} alt={pop.title} />
            <h2>{pop.title}</h2>
            <p>Series: {pop.series.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopList;
