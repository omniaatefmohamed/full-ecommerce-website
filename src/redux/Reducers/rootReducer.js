import {combineReducers} from 'redux'
import categoryReducer from './CategoryReducer'

combineReducers({
    CategoryReducer: categoryReducer
})

export default combineReducers;