import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import { setUser } from "../../user";

export function* handleGetUser(action) {
  console.log(action);
  try {
    const response = yield call(
      requestGetUser,
      action.page,
      action.filter,
      action.order
    );
    const { data } = response;
    console.log(data);
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
