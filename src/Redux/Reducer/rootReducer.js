import { combineReducers } from "redux";

const initialState = {
  location: "",
  shopName: "",
  address: "",
  certificateNumber: "",
  phoneNumber: "",
  numberOfProducts: "",
  image: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "SET_SHOP_NAME":
      return {
        ...state,
        shopName: action.payload,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    case "SET_CERTIFICATE_NUMBER":
      return {
        ...state,
        certificateNumber: action.payload,
      };
    case "SET_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "SET_NUMBER_OF_PRODUCTS":
      return {
        ...state,
        numberOfProducts: action.payload,
      };
    case "SET_IMAGE":
      return {
        ...state,
        image: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  registration: registrationReducer,
});

export default rootReducer;
