import Get_All_Category from '../Types/Types'


const initial = {
    category: [],
    loading: true
}
const allCategoriesReducer = ((state = initial, action) => {
    switch (action.type){
        case Get_All_Category:
            return {
                ...state,
                category: action.payload,
                loading:false
            }
            default:
                return state;
    }
})

export default allCategoriesReducer