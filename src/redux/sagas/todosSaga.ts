import {call, put, takeLatest} from "redux-saga/effects";
import {GET_TODOS_REQUEST, getTodosError, getTodosSuccess} from "../user";
import {SagaIterator} from '@redux-saga/core';
import fetcher from "./fetcher";
import {ReduxAction} from "../types";


function* handleGetUser(action: ReduxAction): SagaIterator {
    try {
        const response = yield call(
            fetcher, {
                method: "get",
                url: "/items",
                params: {
                    page: action.payload.page,
                    filter: action.payload.filter,
                    sort: action.payload.order,
                }
            }
        );
        const {data} = response;
        yield put(getTodosSuccess(data));
    } catch (error) {
        yield put(getTodosError(error))
    }
}

export default function* todosSaga() {
    yield takeLatest(GET_TODOS_REQUEST, handleGetUser);
}

