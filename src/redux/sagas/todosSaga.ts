import {call, put, takeLatest} from "redux-saga/effects";
import {GET_TODOS_REQUEST, deleteTodoSuccess, getTodosError, getTodosSuccess, DELETE_TODO_REQUEST, deleteTodoError, POST_TODO_REQUEST, postTodoSuccess, postTodoError, EDIT_TODO_REQUEST, editTodoError, editTodoSuccess} from "../todo";
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

  function* handleEditTodo(action: ReduxAction): SagaIterator {
    console.log(action)
    try {
        const response = yield call(
            fetcher, {
                method: "patch",
                url: "/item",
                data: {
                  todo:  action.payload.todo,
                },
            }
        );
        console.log(response.data[1][0])
        yield put(editTodoSuccess(response.data[1][0]))
    } catch (error) {
        yield put(editTodoError(error))
    }
}


export default function* todosSaga() {
    yield takeLatest(GET_TODOS_REQUEST, handleGetUser);
    yield takeLatest(DELETE_TODO_REQUEST, handleDeleteTodo); 
    yield takeLatest(POST_TODO_REQUEST, handlePostTodo)
    yield takeLatest(EDIT_TODO_REQUEST, handleEditTodo)
}

