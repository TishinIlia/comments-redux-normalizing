import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import articles, { sagas as ArticlesSaga } from "./Articles";
import comments, { sagas as CommentsSaga } from "./Comments";

export default combineReducers({articles, comments});

export function* rootSaga() {
  yield fork(ArticlesSaga);
  yield fork(CommentsSaga);
}
