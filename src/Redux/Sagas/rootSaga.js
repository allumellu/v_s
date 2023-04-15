import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

function* registerShopSaga(action) {
  const {
    location,
    shopName,
    address,
    certificateNumber,
    phoneNumber,
    numberOfProducts,
    image,
  } = action.payload;

  try {
    // Make API call to register shop
    const response = yield call(axios.post, "API_ENDPOINT", {
      location,
      shopName,
      address,
      certificateNumber,
      phoneNumber,
      numberOfProducts,
      image,
    });

    console.log("Shop registered successfully:", response.data);

    // Dispatch success action
    yield put({ type: "REGISTER_SHOP_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Error registering shop:", error);

    // Dispatch error action
    yield put({ type: "REGISTER_SHOP_ERROR", payload: error.message });
  }
}

function* rootSaga() {
  yield takeLatest("REGISTER_SHOP_REQUEST", registerShopSaga);
}

export default rootSaga;
