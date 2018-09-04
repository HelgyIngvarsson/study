import { createStore, applyMiddleware } from 'redux'
import combineReducer from './reducers/index'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action);
        const returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue
    }
}

export const Store = createStore(
    combineReducer,
    applyMiddleware(logger,thunk,promise)
);