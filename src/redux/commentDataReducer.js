import * as ActionTypes from '../actions/Types';
import {CommentTypeEnum} from '../constants/Enum';

const Id = () => {
  var S4 = () => {
    // eslint-disable-next-line no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
};
const initialState = [];

export const commentDataReducer = (state = initialState, action) => {
  const {payload} = action;
  const {comment, type} = payload || {};
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let val = [
        ...state,
        {
          id: Id(),
          type: type,
          comment: comment,
        },
      ];
      return val;
    default:
      return state;
  }
};

export default commentDataReducer;
