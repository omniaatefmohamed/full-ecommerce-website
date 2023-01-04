import { Get_All_Category } from "../type";

const initial = {
    all_category: {},
    loading: true
}
const categoryReducer = (state = initial, action) => {
    switch (action.type) {
        case Get_All_Category:
            return {
                ...state,
                all_category: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default categoryReducer;