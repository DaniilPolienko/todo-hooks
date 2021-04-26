import { CommentSharp } from "@material-ui/icons";
import { todoInterface } from "../components/Todos";
import {ReduxAction} from "./types";

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR'

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST'
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS'
export const DELETE_TODO_ERROR = 'DELETE_TODO_ERROR'

export const POST_TODO_REQUEST = 'POST_TODO_REQUEST'
export const POST_TODO_SUCCESS = 'POST_TODO_SUCCESS'
export const POST_TODO_ERROR = 'POST_TODO_ERROR'

export interface interfaceUser {
    firstname: string,
    lastname: string,
    email: string
  }

export interface interfaceTodo {
    createdAt: string,
    done: boolean
    id: string,
    message: string,
    updatedAt: string,
    uuid: string
}

export const getTodosRequest = (currentPage: number, filter: boolean | null, order: string) => ({
    type: GET_TODOS_REQUEST,
    payload: {
        page: currentPage,
        filter: filter,
        order: order
    }

})

export const getTodosSuccess = (user: interfaceTodo) => ({
    type: GET_TODOS_SUCCESS,
    payload: {
        user
    }
})

export const getTodosError = (error: any) => ({
    type: GET_TODOS_ERROR,
    payload: {
        error
    }
})

export const deleteTodoRequest = (id: string) => ({
    type: DELETE_TODO_REQUEST,
    payload: {
        id
    }
})

export const deleteTodoSuccess = (todo: interfaceTodo) => ({
    type: DELETE_TODO_SUCCESS,
    payload: {
        todo
    }
})

export const deleteTodoError = (error: any) => ({
    type: DELETE_TODO_ERROR,
    payload: {
        error
    }
})

export const postTodoRequest = (message: string) => ({
    type: POST_TODO_REQUEST,
    payload : {
        message
    }
})

export const postTodoSuccess = (todo: interfaceTodo) => ({
    type: POST_TODO_SUCCESS,
    payload : {
        todo
    }
})

export const postTodoError = (error: any) => ({
    type: POST_TODO_SUCCESS,
    payload : {
        error
    }
})


export interface ITodo {
    loading: boolean;
    error: string;
    user: IUser;
}

export interface IUser {
    count: number;
    rows: todoInterface[]
}

export interface IState {
    user: IUser | null;
    loading: boolean;
    error: string | null;
}

const initialState: IState = {
    user: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ReduxAction )=> {
    switch(action.type) {
        case GET_TODOS_REQUEST:
            return {...state, loading: true}
        case GET_TODOS_SUCCESS:
            const {user} = action.payload;
            return {...state, user, loading: false}
        case GET_TODOS_ERROR:
            return {...state, error: action.payload.error, loading: false}
        case DELETE_TODO_REQUEST:
            return {...state, loading: true}
        case DELETE_TODO_SUCCESS:
            const {todo} = action.payload;
            const todos = {...state}?.user?.rows?.filter(el => el.id !== todo.id);
            return {...state, user: { ...state?.user, rows: todos},  loading: false}
        case DELETE_TODO_ERROR:
            return {...state, error: action.payload.error, loading: false}
        case POST_TODO_REQUEST:
            return {...state, loading: true}
        case POST_TODO_SUCCESS:
            const postTodos = state.user?.rows
            postTodos?.push(action.payload.todo)
            return {...state, user: { ...state?.user, rows: postTodos}, loading: false}
        case POST_TODO_ERROR:
            return {...state, loading: false}
        default:
            return state;
    }
}
