import * as ActionTypes from '../actions/Types';
const initialState = {};

export const loginReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
