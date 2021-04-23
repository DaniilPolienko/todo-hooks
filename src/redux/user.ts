
export const GET_USER = 'GET_USER'
export const SET_USER = 'SET_USER'


export interface interfaceUser {
    firstname: string,
    lastname: string,
    email: string
  }


export const getUser = (currentPage: number, filter: boolean | null, order: string) => ({
    type: GET_USER,
    page: currentPage,
    filter: filter,
    order: order
})

export const setUser = (user: interfaceUser) => ({
    type: SET_USER,
    user
})

const initialState = {
    user: undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type?: any; user?: any }) => {
    switch(action.type) {
        case SET_USER:  
            const {user} = action;
            return {...state, user}
        default:
            return state;
    }
}