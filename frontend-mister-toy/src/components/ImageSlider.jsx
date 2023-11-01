import { useEffect, useState } from "react";
import rightArrow from "../assets/images/chevron-right.svg";
import leftArrow from "../assets/images/chevron-left.svg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentIndex]);

  return (
    <div className="img div h-[650px] w-full relative">
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-[32px] text-stone-50 z-10 cursor-pointer"
        onClick={nextSlide}
      >
        <img src={rightArrow} alt="right-arrow" className="w-10 h-10" />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-[32px] text-stone-50 z-10 cursor-pointer"
        onClick={prevSlide}
      >
        <img src={leftArrow} alt="left-arrow" className="w-10 h-10 " />
      </div>
      <img
        className="w-full h-full"
        src={slides[currentIndex].img}
        alt="logo"
      />
    </div>
  );
};

export default ImageSlider;
