import { takeLatest, put, call, fork } from "redux-saga/effects";
import { articlesRequest, articlesSuccess, articlesFailure } from "./actions";
import { getArticles } from "./api";

export function* fetchArticles(action) {
  const queries = action.payload;
  try {
    const response = yield call(getArticles, queries);
    console.log(response)
    yield put(articlesSuccess(response));
  } catch (error) {
    yield put(articlesFailure(error));
  }
}

function* fetchArticlesWatcher() {
  yield takeLatest(articlesRequest, fetchArticles);
}

export default function*() {
  yield fork(fetchArticlesWatcher);
}
