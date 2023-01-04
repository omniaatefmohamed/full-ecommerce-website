import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducers/RootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {}
const middleware = [thunk]

const store = createStore(RootReducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store