import { createAction } from "redux-actions";

export const commentsRequest = createAction("COMMENTS/COMMENTS_REQUEST");
export const commentsSuccess = createAction("COMMENTS/COMMENTS_SUCCESS");
export const commentsFailure = createAction("COMMENTS/COMMENTS_FAILURE");
