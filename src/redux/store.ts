import { create } from 'node:domain'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import userReducer from './user'
import createSagaMiddleware from 'redux-saga'
import  rootSaga from './sagas/rootSaga'



const reducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware= [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch