import {call, put, takeLatest} from "redux-saga/effects";
import {GET_TODOS_REQUEST, deleteTodoSuccess, getTodosError, getTodosSuccess, DELETE_TODO_REQUEST, deleteTodoError, POST_TODO_REQUEST, postTodoSuccess, postTodoError} from "../user";
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


  function* handlePostTodo(action: ReduxAction): SagaIterator {
    try {
        const response = yield call(
            fetcher, {
                method: "post",
                url: "/item",
                data: {
                  message: action.payload.message,
                },
            }
        );
        console.log(response.data)
        yield put(postTodoSuccess(response.data))
    } catch (error) {
        yield put(postTodoError(error))
    }
}

export default function* todosSaga() {
    yield takeLatest(GET_TODOS_REQUEST, handleGetUser);
    yield takeLatest(DELETE_TODO_REQUEST, handleDeleteTodo); 
    yield takeLatest(POST_TODO_REQUEST, handlePostTodo)
}

