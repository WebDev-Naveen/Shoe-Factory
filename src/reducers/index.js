import { combineReducers } from "redux";
import reducer from "./reducer";
import wishreducer from "./wishreducer";
export default combineReducers({
  reducer,
  wishreducer,
});
