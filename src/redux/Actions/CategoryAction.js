import BaseURL from "../../API/BaseUrl"
import useGetDataHook from "../../hooks/UseGetDataHook"
import { Get_All_Category, Get_Error } from '../Types/Types'

export const getAllCategory = () => async (dispatch) => {
    try {
        const res = await useGetDataHook('/api/v1/categories')
        dispatch({
            type: Get_All_Category,
            data: res
        })
    }
    catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error" + e
        })
    }
}