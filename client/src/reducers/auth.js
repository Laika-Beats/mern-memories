import { AUTH } from "../constants/actionTypes";

const auth = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      return state;
    default:
      return state;
  }
};

export default auth;
