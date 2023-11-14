import { useEffect, useState } from "react";

function PopService() {
  const URL = "http://localhost:8000/products";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return;
}

export default PopService;
