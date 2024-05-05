import { combineReducers } from "redux";
import fetchJobReducer from "./fetchJobReducer";

export default combineReducers({
  fetchJob: fetchJobReducer,
});
