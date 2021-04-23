import { create } from 'node:domain'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import userReducer from './user'
import createSagaMiddlewear from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga.js'



const reducer = combineReducers({
    user: userReducer
})

const sagaMiddlewear = createSagaMiddlewear();

const middlewear= [sagaMiddlewear]

const store = createStore(reducer, {}, applyMiddleware(...middlewear))

sagaMiddlewear.run(watcherSaga)

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch