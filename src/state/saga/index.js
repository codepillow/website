import { all, fork } from "redux-saga/effects";

import applicationSagas from "./application";

export default function* root() {
  yield all([fork(applicationSagas)]);
}
