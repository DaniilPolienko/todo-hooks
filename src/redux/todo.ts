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

export const EDIT_TODO_REQUEST = 'EDIT_TODO_REQUEST'
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS'
export const EDIT_TODO_ERROR = 'EDIT_TODO_ERROR'

export const RESET = 'RESET'

export interface interfaceUser {
    firstname: string,
    lastname: string,
    email: string
  }

export interface interfaceTodo {
    createdAt?: string,
    done?: boolean
    id: string,
    message?: string,
    updatedAt?: string,
    uuid?: string
}

export const getTodosRequest = (currentPage: number, filter: boolean | null, order: string) => ({
    type: GET_TODOS_REQUEST,
    payload: {
        page: currentPage,
        filter: filter,
        order: order
    }

})

export const getTodosSuccess = (todo: interfaceTodo) => ({
    type: GET_TODOS_SUCCESS,
    payload: {
        todo
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

export const editTodoRequest = (todo: interfaceTodo) => ({
    type: EDIT_TODO_REQUEST,
    payload : {
        todo
    }
})

export const editTodoSuccess = (todo: interfaceTodo) => ({
    type: EDIT_TODO_SUCCESS,
    payload : {
        todo
    }
})

export const editTodoError = (error: any) => ({
    type: EDIT_TODO_ERROR,
    payload : {
        error
    }
})

export const resetAction = () => ({
    type: 'RESET'
})

export interface ITodo {
    loading: boolean;
    error: {message: string} | null;
    todo: InterfaceTodo;
}

export interface InterfaceTodo {
    count: number;
    rows: todoInterface[]
    pages: number
}

export interface IState {
    todo: InterfaceTodo | null;
    loading: boolean;
    error: {message: string} | null;
}

const initialState: IState = {
    todo: null,
    loading: false,
    error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: ReduxAction )=> {
    switch(action.type) {
        case GET_TODOS_REQUEST:
            return {...state, loading: true}
        case GET_TODOS_SUCCESS:
            const {todo} = action.payload;
            let getPages = 0;
            console.log(todo)
            getPages = Math.ceil(todo.count / 5)
            return {...state, todo : {...todo, pages: getPages}, loading: false}
        case GET_TODOS_ERROR:
            return {...state, error: action.payload.error, loading: false}
        case DELETE_TODO_REQUEST:
            return {...state, loading: true}
        case DELETE_TODO_SUCCESS:
            const deleteTodo = action.payload?.todo;
            const todos = {...state}?.todo?.rows?.filter(el => el.id !== deleteTodo.id);
            return {...state, todo: { ...state?.todo, rows: todos},  loading: false}
        case DELETE_TODO_ERROR:
            return {...state, error: action.payload.error, loading: false}
        case POST_TODO_REQUEST:
            return {...state, loading: true}
        case POST_TODO_SUCCESS:
            let pages = 1
            const postTodos = state.todo?.rows
            if (state && state.todo) {
                pages = Math.ceil(state?.todo?.count / 5)
            }
            console.log(pages)
            console.log('!!!', state)
            if (postTodos?.length === 5) 
            return {...state,  todo: { ...state?.todo, rows: postTodos, pages: pages + 1 }, loading: false}
            postTodos?.push(action.payload.todo)
            return {...state, todo: { ...state?.todo, rows: postTodos, pages: pages}, loading: false}
        case POST_TODO_ERROR:
            return {...state, loading: false}
        case EDIT_TODO_REQUEST:
            return {...state, loading: true}
        case EDIT_TODO_SUCCESS:
            const editTodo = action.payload;
            // eslint-disable-next-line no-self-assign
            const editTodos = state.todo?.rows.map(el => el.id === editTodo.todo.id ? el = editTodo.todo : el = el)
            return {...state, todo: {...state?.todo, rows: editTodos}, loading: false}
        case EDIT_TODO_ERROR:
            return {...state, error: action.payload.error, loading: false}
        case RESET:
            return {...initialState}
        default:
            return state;
    }
}
