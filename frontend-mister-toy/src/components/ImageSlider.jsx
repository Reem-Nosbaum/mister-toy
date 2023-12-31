import { useEffect, useState } from "react";
import rightArrow from "../assets/images/angle-right.svg";
import leftArrow from "../assets/images/angle-left.svg";
import dot from "../assets/images/dot.svg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAotuplay] = useState(true);

  const nextSlide = () => {
    if (slides) {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    if (slides) {
      const newIndex = (currentIndex - 1 + slides.length) % slides.length;
      setCurrentIndex(newIndex);
    }
  };

  const handelAutoplay = (e) => {
    setAotuplay(e.target.checked);
  };

  const handelDotClick = (index) => {
    setCurrentIndex(index);
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
      if (autoplay) {
        nextSlide();
      }
    }, 3000);

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  if (!slides || slides.length === 0 || !slides[currentIndex]) {
    return null;
  }

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
      <div className="absolute top-52 left-14 text-stone-50 font-sans  ">
        <h1 className="relative bottom-6">{slides[currentIndex].title}</h1>

        <h2 className="text-6xl relative bottom-4  font-semibold font-sans">
          {slides[currentIndex].secondaryTitle0}
        </h2>
        <h2 className="text-6xl relative bottom-4  font-semibold font-sans">
          {slides[currentIndex].secondaryTitle1}
        </h2>

        <h3> {slides[currentIndex].paragraph0}</h3>
        <h3> {slides[currentIndex].paragraph1}</h3>
      </div>
      <img
        className="w-full h-full "
        src={slides[currentIndex].bgImg}
        alt="bgImg"
      />
      <label className="bottom-12 relative text-stone-50 left-10 text-sm  ">
        <input type="checkbox" checked={autoplay} onChange={handelAutoplay} />{" "}
        Autoplay {autoplay ? "On" : "Off"}
      </label>
      <ul className="flex justify-center items-center">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={dot}
            alt="dot"
            className={`w-18 h-8 cursor-pointer hover:invert relative bottom-24 ${
              currentIndex === index ? "invert" : ""
            }`}
            onClick={() => {
              handelDotClick(index);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
