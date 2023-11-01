import ImageSlider from "../components/ImageSlider";
import image1 from "../assets/images/cover/Feature-FNAFHoliday-Background.jpg";
import image2 from "../assets/images/cover/Feature-GiftGuide-Background.jpg";
import image3 from "../assets/images/cover/Feature-OnePiece-Map-BG.jpg";

function Home() {
  const slides = [
    { img: image1, title: "Holiday" },
    { img: image2, title: "GiftGuide" },
    { img: image3, title: "OnePiece" },
  ];

  return (
    <div className="">
      <ImageSlider slides={slides} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold z-10">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          nulla nisi veniam, vel qui quasi modi! Deleniti libero molestiae omnis
          aspernatur, eaque possimus saepe nemo obcaecati, dolores, qui iure
          maiores?
        </div>
      </div>
    </div>
  );
}

export default Home;
