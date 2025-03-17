import axios from "axios";

const API = axios.create({
    baseURL: "https://www.themealdb.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor
API.interceptors.request.use((config) => {
    // Add Authorization token if available
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Baber ${token}`
    }

    return config;
})

// Response Interceptor
API.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error: ", err?.response?.data || "Error in global handle !");
        return Promise.reject(err);
    }
)

export default API;