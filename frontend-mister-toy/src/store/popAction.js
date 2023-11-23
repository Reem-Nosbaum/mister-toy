import { popService } from "../services/pop.service";
import { popsError, popsLoading, popsSuccess } from "./popSlice";

export const fetchPops = () => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const data = await popService.getPops();
    dispatch(popsSuccess(data));
    console.log("API response:", data);
  } catch (error) {
    dispatch(popsError(error.message));
  }
};

export const updateCart = (popId, value) => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const updatedPopCart = await popService.updateInCart(popId, value);
    dispatch(popsSuccess(updatedPopCart));
  } catch (error) {
    dispatch(popsError(error.message));
  }
};
