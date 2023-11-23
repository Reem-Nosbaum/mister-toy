import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { fetchSlides } from "../store/slideSlice";
import ImageSlider from "../components/ImageSlider";
import { fetchPops, updateCart } from "../store/popAction";
import rightArrow from "../assets/images/angle-right.svg";
import leftArrow from "../assets/images/angle-left.svg";

function Home() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);
  const slides = useSelector((state) => state.slide.slides);
  const slideLoading = useSelector((state) => state.slide.loading);
  const slideError = useSelector((state) => state.slide.error);
  const popLoading = useSelector((state) => state.pop.loading);
  const popError = useSelector((state) => state.pop.error);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSlides());
    dispatch(fetchPops());
  }, []);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 5, pops.length - 5));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 5, 0));
  };

  if (slideLoading || popLoading) {
    return <div>Loading...</div>;
  }

  if (slideError || popError) {
    return <div>Error: {slideError || popError}</div>;
  }

  return (
    <div>
      <ImageSlider slides={slides} />
      <h1 className="text-6xl items-center justify-center flex pt-3">
        NEW PICKS FOR YOU!
      </h1>
      <div className="flex justify-center h-[500px]">
        <div className=" flex items-center">
          {currentIndex > 0 && (
            <button onClick={handlePrev}>
              <img src={leftArrow} alt="left-arrow" className="w-10 h-10" />
            </button>
          )}
          <Card
            pops={pops}
            startIndex={currentIndex}
            endIndex={currentIndex + 5}
          />
        </div>
        {currentIndex < pops.length - 5 && (
          <button onClick={handleNext}>
            <img src={rightArrow} alt="right-arrow" className="w-10 h-10" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
