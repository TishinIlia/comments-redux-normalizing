import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { articlesRequest, articlesSuccess, articlesFailure } from "./actions";

const result = handleActions(
  {
    [articlesRequest]: () => null,
    [articlesSuccess]: (_state, action) => action.payload,
    [articlesFailure]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [articlesRequest]: () => true,
    [articlesSuccess]: () => false,
    [articlesFailure]: () => false
  },
  false
);

export default combineReducers({
  result,
  isLoading
});
