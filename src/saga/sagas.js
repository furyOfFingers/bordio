import { all } from "redux-saga/effects";
import formSend from "./formSend";

export default function* rootSaga() {
  yield all([formSend()]);
}
