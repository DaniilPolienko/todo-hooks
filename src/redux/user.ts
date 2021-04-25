import {ReduxAction} from "./types";

export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR'

export interface interfaceUser {
    firstname: string,
    lastname: string,
    email: string
  }


export const getTodosRequest = (currentPage: number, filter: boolean | null, order: string) => ({
    type: GET_TODOS_REQUEST,
    payload: {
        page: currentPage,
        filter: filter,
        order: order
    }

})

export const getTodosSuccess = (user: interfaceUser) => ({
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


const initialState = {
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
        default:
            return state;

    }
}
