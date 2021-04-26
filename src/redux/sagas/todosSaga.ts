import {call, put, takeLatest} from "redux-saga/effects";
import {GET_TODOS_REQUEST, deleteTodoSuccess, getTodosError, getTodosSuccess, DELETE_TODO_REQUEST, deleteTodoError} from "../user";
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
        console.log(data)
        yield put(getTodosSuccess(data));
    } catch (error) {
        yield put(getTodosError(error))
    }
}

function* handleDeleteTodo(action: ReduxAction): SagaIterator {
    try {
        const response = yield call(
            fetcher, {
                method: "delete",
                url: "/item",
                params: {
                    id: action.payload.id
                }
            }
        );
        console.log(response.data)
        yield put(deleteTodoSuccess(response.data))
    } catch (error) {
        yield put(deleteTodoError(error))
    }
}


export default function* todosSaga() {
    yield takeLatest(GET_TODOS_REQUEST, handleGetUser);
    yield takeLatest(DELETE_TODO_REQUEST, handleDeleteTodo); 
}

