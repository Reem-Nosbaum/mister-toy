import { useEffect, useState } from "react";
import Card from "../components/Card";
import { popList } from "../store/popSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.value);

  // Use state to track whether data has been loaded
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Dispatch the action to fetch data
    dispatch(popList());

    // Set dataLoaded to true once the data has been fetched
    setDataLoaded(true);
  }, [dispatch]);

  console.log(pops);

  return (
    <div>
      {/* <ImageSlider slides={slides} /> */}
      <h1 className="text-6xl items-center justify-center flex pt-3">
        NEW PICKS FOR YOU!
      </h1>
      <div className="flex justify-center space-x-10">
        <div className="flex items-center"></div>
        <Card pops={pops} />
        {/* <div className="flex">{dataLoaded && <Card products={pops} />}</div> */}
      </div>
    </div>
  );
}

export default Home;
