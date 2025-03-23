import {API} from "../utils/axiosInstance.js"

export const getSeaFoodMeal = async () => {
    const response = await API.get("/api/json/v1/1/filter.php?c=Seafood");
    return response.data;
}

export const getDetailMeal = async (mealId) => {
    const response = await API.get(`/api/json/v1/1/lookup.php?i=${mealId}`);
    return response.data;
}