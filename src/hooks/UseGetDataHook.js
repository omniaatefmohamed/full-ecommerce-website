import BaseURL from "../API/BaseUrl"

const useGetDataHook = async (url, params) => {
    const res = await BaseURL.get(url, params);
    return res.data
}

export default useGetDataHook;