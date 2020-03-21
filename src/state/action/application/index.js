const ApplicationActionTypes = {
  INITIALIZE_APPLICATION_REQUEST: "INITIALIZE_APPLICATION_REQUEST",
  INITIALIZE_APPLICATION_ERROR: "INITIALIZE_APPLICATION_ERROR",
  INITIALIZE_APPLICATION_SUCCESS: "INITIALIZE_APPLICATION_SUCCESS",

  GET_INFO_REQUEST: "GET_INFO_REQUEST",
  GET_INFO_ERROR: "GET_INFO_ERROR",
  GET_INFO_SUCCESS: "GET_INFO_SUCCESS",

  JOIN_USER_REQUEST: "JOIN_USER_REQUEST",
  JOIN_USER_ERROR: "JOIN_USER_ERROR",
  JOIN_USER_SUCCESS: "JOIN_USER_SUCCESS"
};

// initializeApplication

function initializeApplication() {
  return {
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_REQUEST
  };
}

function initializeApplicationError(error) {
  return {
    payload: { error },
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_ERROR
  };
}

function initializeApplicationSuccess() {
  return {
    payload: { isInitialized: true },
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_SUCCESS
  };
}

// getInfo

function getInfo() {
  return {
    type: ApplicationActionTypes.GET_INFO_REQUEST
  };
}

function getInfoError(error) {
  return {
    payload: { error },
    type: ApplicationActionTypes.GET_INFO_ERROR
  };
}

function getInfoSuccess(payload) {
  return {
    payload,
    type: ApplicationActionTypes.GET_INFO_SUCCESS
  };
}

// joinUser

function joinUser(payload) {
  return {
    payload,
    type: ApplicationActionTypes.JOIN_USER_REQUEST
  };
}

function joinUserError(error) {
  return {
    payload: { error },
    type: ApplicationActionTypes.JOIN_USER_ERROR
  };
}

function joinUserSuccess(data) {
  return {
    payload: data,
    type: ApplicationActionTypes.JOIN_USER_SUCCESS
  };
}


const ApplicationActionCreators = {
  initializeApplication,
  initializeApplicationError,
  initializeApplicationSuccess,
  getInfo,
  getInfoError,
  getInfoSuccess,
  joinUser,
  joinUserError,
  joinUserSuccess
};

export { ApplicationActionTypes, ApplicationActionCreators };
