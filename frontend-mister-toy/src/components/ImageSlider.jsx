import { useEffect, useState } from "react";
import rightArrow from "../assets/images/angle-right.svg";
import leftArrow from "../assets/images/angle-left.svg";

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

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="img div h-[620px] w-full relative ">
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-[32px] text-stone-50 z-10 cursor-pointer hover:invert"
        onClick={nextSlide}
      >
        <img src={rightArrow} alt="right-arrow" className="w-10 h-10" />
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-[32px] text-stone-50 z-10 cursor-pointer hover:invert "
        onClick={prevSlide}
      >
        <img src={leftArrow} alt="left-arrow" className="w-10 h-10" />
      </div>

      <img
        className="absolute right-16  "
        src={slides[currentIndex].popImg}
        alt="pop"
      />
      <div className="absolute top-52 left-14 text-stone-50 ">
        <h1 className="relative bottom-6">{slides[currentIndex].title}</h1>
        {slides[currentIndex].h2.map((text, index) => (
          <h2 className="text-6xl relative bottom-4" key={index}>
            {text}
          </h2>
        ))}

        {slides[currentIndex].h3.map((text, index) => (
          <h3 key={index}>{text}</h3>
        ))}
      </div>
      <img
        className="w-full h-full "
        src={slides[currentIndex].bgImg}
        alt="logo"
      />
    </div>
  );
};

export default ImageSlider;
