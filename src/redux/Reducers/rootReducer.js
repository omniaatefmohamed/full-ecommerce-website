import { combineReducers } from "redux";
import allCategoriesReducer from './allCategoriesReducer'
export default combineReducers ({
    allCategory : allCategoriesReducer
})