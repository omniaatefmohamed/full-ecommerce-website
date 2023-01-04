import BaseURL from "../../API/BaseUrl"
import { Get_All_Category } from "../type"

const categoryAction = async () => {
    try {
        const res = await BaseURL.get("/api/v1/categories")
        return {
            type:Get_All_Category,
            payload: res.data
        }
    }
    catch(e) { }
}

export default categoryAction;