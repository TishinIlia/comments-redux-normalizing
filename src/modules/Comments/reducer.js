import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { commentsRequest, commentsSuccess, commentsFailure } from "./actions";

const result = handleActions(
  {
    [commentsRequest]: () => null,
    [commentsSuccess]: (_state, action) => action.payload,
    [commentsFailure]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [commentsRequest]: () => true,
    [commentsSuccess]: () => false,
    [commentsFailure]: () => false
  },
  false
);

export default combineReducers({
  result,
  isLoading
});
