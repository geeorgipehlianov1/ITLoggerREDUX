import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERRORS,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case LOGS_ERRORS:
      console.error(action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};