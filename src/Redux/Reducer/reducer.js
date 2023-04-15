import {
  REGISTER_SHOP_REQUEST,
  REGISTER_SHOP_SUCCESS,
  REGISTER_SHOP_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  message: "",
  error: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SHOP_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SHOP_SUCCESS:
      return { ...state, loading: false, message: action.payload };
    case REGISTER_SHOP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
