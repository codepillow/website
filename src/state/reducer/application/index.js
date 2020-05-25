import { ApplicationActionTypes } from "../../action";

const defaultState = { 
	user: null,
  states: [],
  teams: [],
  genres: [],
  categories: []
};

const application = (state = defaultState, action) => {
  switch (action.type) {
  	case ApplicationActionTypes.JOIN_USER_SUCCESS:
      return Object.assign({}, state, {user: action.payload});
    case ApplicationActionTypes.INITIALIZE_APPLICATION_SUCCESS:
      return Object.assign({}, state, action.payload);
    case ApplicationActionTypes.GET_INFO_SUCCESS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default application;
