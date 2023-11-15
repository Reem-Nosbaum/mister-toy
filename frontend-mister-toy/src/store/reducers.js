const initialState = {
  popServiceData: null,
  popServiceError: null,
  slides: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POP_SERVICE_DATA":
      return { ...state, popServiceData: action.payload };
    case "SET_POP_SERVICE_ERROR":
      return { ...state, popServiceError: action.payload };
    case "SET_SLIDES":
      return { ...state, slides: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
