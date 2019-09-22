import { createAction } from "redux-actions";

export const articlesRequest = createAction("ARTICLES/ARTICLES_REQUEST");
export const articlesSuccess = createAction("ARTICLES/ARTICLES_SUCCESS");
export const articlesFailure = createAction("ARTICLES/ARTICLES_FAILURE");
