export const REGISTER_SHOP_REQUEST = "REGISTER_SHOP_REQUEST";
export const REGISTER_SHOP_SUCCESS = "REGISTER_SHOP_SUCCESS";
export const REGISTER_SHOP_FAILURE = "REGISTER_SHOP_FAILURE";

export const registerShop = (shopData) => ({
  type: REGISTER_SHOP_REQUEST,
  payload: shopData,
});

export const registerShopSuccess = (message) => ({
  type: REGISTER_SHOP_SUCCESS,
  payload: message,
});

export const registerShopFailure = (error) => ({
  type: REGISTER_SHOP_FAILURE,
  payload: error,
});
