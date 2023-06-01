import * as ActionTypes from './Types';

export const addComment = requestBody => async (dispatch, getState) => {
  dispatch({
    type: ActionTypes.ADD_COMMENT,
    payload: requestBody,
  });
};
