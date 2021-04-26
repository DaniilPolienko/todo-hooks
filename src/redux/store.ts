import { create } from 'node:domain'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import userReducer, { ITodo, IUser } from './user'
import createSagaMiddleware from 'redux-saga'
import  rootSaga from './sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';



const reducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware= [sagaMiddleware]

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)), )

sagaMiddleware.run(rootSaga)

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
    user: ITodo;
    loading: boolean;
    error: string | null;
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch