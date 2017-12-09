import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


import campuslistReducer from './reducers/campuslistReducer';
import studentListReducer from './reducers/studentListReducer';

const mainReducer = combineReducers({
    campuses: campuslistReducer,
    students: studentListReducer
})

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

export default store;

// export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

