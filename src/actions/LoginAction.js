import * as ActionTypes from './Types';

export const authenticateUser = requestBody => async (dispatch, getState) => {
  dispatch({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: true,
  });
};
