import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import PopService from "../services/PopService";
import { useSelector } from "react-redux";

function Home() {
  const popServiceData = PopService();
  const slides = useSelector((state) => state.slides);

  return (
    <div>
      <ImageSlider slides={slides} />
      <h1 className="text-6xl items-center justify-center flex pt-3">
        NEW PICKS FOR YOU!
      </h1>
      <div className="flex">
        {popServiceData ? (
          <Card products={popServiceData} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Home;
