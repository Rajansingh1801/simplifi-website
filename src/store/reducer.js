import * as actionTypes from "./actions";
import {
  loginObjOne,
  signUpObjOne,
  forgotObjOne,
  resetObjOne,
  restaurantDetailsObjOne,
  bankDetailsObjOne,
  verifyOtpObjOne,
  pendingApprovalObjOne,
} from "../components/LoginSection/Data";
const data = JSON.parse(localStorage.getItem("UserDataEverguard"));
console.log(data);

const reloadPassData = (data) => {
  if (!data) {
    return loginObjOne;
  } else if (data.is_profile_completed) {
    return pendingApprovalObjOne;
  } else if (!data.is_profile_completed) {
    return restaurantDetailsObjOne;
  } else {
    return loginObjOne;
  }
};

// console.log(localStorage.getItem("access_token"), "tokennnnnnnnnnnn");

const initialState = {
  userData: JSON.parse(localStorage.getItem("UserDataEverguard")),
  userToken: localStorage.getItem("access_token"),
  defaultState: reloadPassData(data),
  locations: [],
  sidebar: false,
  deviceToken: "",
};
// console.log("Device token is ", deviceToken);

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        userData: action.updatedUser,
      };
    case actionTypes.USER_TOKEN:
      return {
        ...state,
        userToken: action.updatedToken,
      };
    case actionTypes.UPDATE_DEFAULT:
      return {
        ...state,
        defaultState: action.updateDefault,
      };
    case actionTypes.GET_LOCATIONS:
      return {
        ...state,
        locations: action.locationData,
      };
    case actionTypes.UPDATE_SIDEBAR:
      return {
        ...state,
        sidebar: action.updateSidebar,
      };
    case actionTypes.DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: action.updateDeviceToken,
      };

    default:
      return state;
  }
};

export default reducer;
