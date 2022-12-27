import { Get_All_Category, Get_Error } from '../Types/Types'


const initial = {
    category: [],
    loading: true
}
const CategoriesReducer = ((state = initial, action) => {
    switch (action.type) {
        case Get_All_Category:
            return {
                ...state,
                category: action.data,
                loading: false
            }
        case Get_Error:
            return {
                category: action.data,
                loading: true
            }
        default:
            return state;
    }
})

export default CategoriesReducer