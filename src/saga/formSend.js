import { takeEvery, call, put } from "redux-saga/effects";
import { getAuth } from "Redux/authenticate";

function* FormSend(data) {
  try {
    const res = yield call(fetchAuthenticate, data.payload);
    yield put(setToken(res.auth_token));
  } catch (err) {
    err && console.log(err, "err FormSend");
  }
}

/** Запрос на отправление формы регистрации. */
export const fetchAuthenticate = (data) => {
  return fetch(`https://registr.com/backend/api/registration`, {
    method: "POST",
    params: data,
  }).then((res) => {
    return res.data;
  });
};

export default function* watchFormSend() {
  yield takeEvery(getAuth, FormSend);
}
