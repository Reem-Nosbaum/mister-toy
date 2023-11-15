// PopService.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const URL = "http://localhost:8000";

const fetchSlides = async (dispatch) => {
  try {
    const response = await fetch(`${URL}/slides`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    dispatch({ type: "SET_SLIDES", payload: jsonData });
    console.log("Slides Data:", jsonData);
  } catch (error) {
    dispatch({ type: "SET_POP_SERVICE_ERROR", payload: error });
  }
};

const fetchProducts = async (dispatch) => {
  try {
    const response = await fetch(`${URL}/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jsonData = await response.json();
    dispatch({ type: "SET_POP_SERVICE_DATA", payload: jsonData });
    console.log("Products Data:", jsonData);
  } catch (error) {
    dispatch({ type: "SET_POP_SERVICE_ERROR", payload: error });
  }
};

const PopService = () => {
  const dispatch = useDispatch();
  const popServiceData = useSelector((state) => state.popServiceData);

  useEffect(() => {
    fetchSlides(dispatch);
    fetchProducts(dispatch);
  }, [dispatch]);

  return popServiceData;
};

export default PopService;
