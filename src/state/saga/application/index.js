// @flow

import { call, put, takeLatest } from "redux-saga/effects";
import {
  ApplicationActionCreators,
  ApplicationActionTypes
} from "../../action";
import { applicationInitialize, joinUser, getInfo } from "../../../service";

const handleJoinUserRequest = function*(action) {
  try {
    const data = yield call(joinUser, action.payload);
    yield put(ApplicationActionCreators.joinUserSuccess(data));
  } catch (error) {
    yield put(ApplicationActionCreators.joinUserError(error));
  }
};

const handleGetInfoRequest = function*() {
  try {
    const data = yield call(getInfo);
    yield put(ApplicationActionCreators.getInfoSuccess(data));
  } catch (error) {
    yield put(ApplicationActionCreators.getInfoError(error));
  }
};

const handleInitializeApplicationRequest = function*() {
  try {
    yield call(applicationInitialize());
    yield put(ApplicationActionCreators.initializeApplicationSuccess());
  } catch (error) {
    yield put(ApplicationActionCreators.initializeApplicationError(error));
  }
};

const Saga = function*() {
  yield takeLatest(
    ApplicationActionTypes.INITIALIZE_APPLICATION_REQUEST,
    handleInitializeApplicationRequest,
  );
  yield takeLatest(
    ApplicationActionTypes.GET_INFO_REQUEST,
    handleGetInfoRequest,
  );
  yield takeLatest(
    ApplicationActionTypes.JOIN_USER_REQUEST,
    handleJoinUserRequest
  );
};

export default Saga;
