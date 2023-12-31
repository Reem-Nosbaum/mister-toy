import { popService } from "../services/pop.service";
import {
  popsError,
  popsLoading,
  popsSuccess,
  updatePopSuccess,
} from "./popSlice";

export const fetchPops = () => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const data = await popService.getPops();
    dispatch(popsSuccess(data));
  } catch (error) {
    dispatch(popsError(error.message));
  }
};

export const updateCart = (pop) => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const updatedPopCart = await popService.updateInCart(pop);
    dispatch(updatePopSuccess(updatedPopCart));
  } catch (error) {
    dispatch(popsError(error.message));
  }
};

export const removeCart = (pop) => async (dispatch) => {
  try {
    dispatch(popsLoading());
    const removePopCart = await popService.updateInCart(pop);
    dispatch(updatePopSuccess(removePopCart));
  } catch (error) {
    dispatch(popsError(error.message));
  }
};
