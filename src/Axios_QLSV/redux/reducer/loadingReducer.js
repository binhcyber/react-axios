import { DISPLAY_LOADING, HIDE_LOADING } from "../constant/loadingConstant";

const initialState = {
  isLoading: false,
};
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING:
      {
        state.isLoading = true;
      }
      return { ...state };
    case HIDE_LOADING: {
      state.isLoading = false;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
