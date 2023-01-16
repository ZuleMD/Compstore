import { combineReducers } from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { addCompReducer, editCompReducer, getAllCompsReducer, getCompByIdReducer } from './reducers/compReducers'
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducer'
const finalReducer = combineReducers({
    getAllCompsReducer: getAllCompsReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    getAllUsersReducer: getAllUsersReducer,
    addCompReducer: addCompReducer,
    getCompByIdReducer: getCompByIdReducer,
    editCompReducer: editCompReducer
})

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnHancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnHancers(applyMiddleware(thunk)))

export default store