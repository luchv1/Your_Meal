import API from "../utils/axiosInstance.js"

export const getSeaFoodMeal = async () => {
    const response = await API.get("/api/json/v1/1/filter.php?c=Seafood");
    return response.data;
}
