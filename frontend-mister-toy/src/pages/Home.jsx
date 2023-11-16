import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { fetchSlides } from "../store/slideSlice";
import ImageSlider from "../components/ImageSlider";
import { fetchPops } from "../store/popSlice";

function Home() {
  const dispatch = useDispatch();
  const pops = useSelector((state) => state.pop.pops);
  const slides = useSelector((state) => state.slide.slides);
  const slideLoading = useSelector((state) => state.slide.loading);
  const slideError = useSelector((state) => state.slide.error);
  const popLoading = useSelector((state) => state.pop.loading);
  const popError = useSelector((state) => state.pop.error);

  useEffect(() => {
    dispatch(fetchSlides());
    dispatch(fetchPops());
  }, [dispatch]);

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
      <div className="flex justify-center space-x-10">
        <div className="flex items-center"></div>
        <div className="flex">
          <Card pops={pops} />
        </div>
      </div>
    </div>
  );
}

export default Home;
