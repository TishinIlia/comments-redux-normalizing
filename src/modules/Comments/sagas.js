import { takeLatest, put, call, fork } from "redux-saga/effects";
import { commentsRequest, commentsSuccess, commentsFailure } from "./actions";
import { getComments } from "./api";

export function* fetchComments(action) {
  const queries = action.payload;
  try {
    const response = yield call(getComments, queries);
    yield put(commentsSuccess(response));
  } catch (error) {
    yield put(commentsFailure(error));
  }
}

function* fetchCommentsWatcher() {
  yield takeLatest(commentsRequest, fetchComments);
}

export default function*() {
  yield fork(fetchCommentsWatcher);
}
