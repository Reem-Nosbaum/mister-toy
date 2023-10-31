import ImageSlider from "../components/ImageSlider";
import image1 from "../assets/images/sliderImages/image-1.jpg";
import image2 from "../assets/images/sliderImages/image-2.jpg";
import image3 from "../assets/images/sliderImages/image-3.jpg";
import image4 from "../assets/images/sliderImages/image-4.jpg";

function Home() {
  const slides = [
    { img: image1, title: "beach" },
    { img: image2, title: "city" },
    { img: image3, title: "forest" },
    { img: image4, title: "israel" },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Home;
