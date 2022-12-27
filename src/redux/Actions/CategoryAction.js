import BaseURL from "../../API/BaseUrl"
import { Get_All_Category, Get_Error } from '../Types/Types'

export const getAllCategory = () => async (dispatch) => {
    try {
        const res = await BaseURL.get("/api/v1/categories");
        console.log(res.data.data)
        dispatch({
            type: Get_All_Category,
            data: res.data
        })
    }
    catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error" + e
        })
    }
}