import { combineReducers } from "redux";
import authForm from "./authenticate";

const rootReducer = combineReducers({
  form: authForm,
});

export default rootReducer;
