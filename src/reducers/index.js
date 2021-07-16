import { combineReducers } from "redux";
import reducer from "./reducer";
import wishreducer from "./wishreducer";
import listreducer from "./listreducer";
export default combineReducers({
  reducer,
  wishreducer,
  listreducer,
});
