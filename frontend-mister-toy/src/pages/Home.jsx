import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import PopService from "../services/PopService";
import { useSelector } from "react-redux";
import { useState } from "react";
import rightArrow from "../assets/images/angle-right.svg";
import leftArrow from "../assets/images/angle-left.svg";

function Home() {
  const popServiceData = PopService();
  const slides = useSelector((state) => state.slides);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Check if popServiceData is an array before trying to slice
  const currentProducts = Array.isArray(popServiceData)
    ? popServiceData.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      )
    : [];

  const totalPages = Math.ceil(popServiceData?.length / productsPerPage) || 1;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <ImageSlider slides={slides} />
      <h1 className="text-6xl items-center justify-center flex pt-3">
        NEW PICKS FOR YOU!
      </h1>
      <div className="flex justify-center space-x-10">
        <div className="flex items-center">
          <button
            className="h-10"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <img src={leftArrow} alt="left-arrow" className="w-10 h-10" />
          </button>
        </div>
        <div className="flex">
          {currentProducts ? (
            <Card products={currentProducts} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="flex items-center">
          <button
            className="h-10"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <img src={rightArrow} alt="right-arrow" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
