import axios from "axios";

const API = axios.create({
    baseURL: "https://www.themealdb.com",
    headers: {
        "Content-Type": "application/json",
    },
});

const SPRING_BOOT_API = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }
});

const interceptorsConfig = (apiInstance) => {
    apiInstance.interceptors.request.use((config) => {
        // Add Authorization token if available
        const token = localStorage.getItem("token");
    
        if (token) {
            config.headers.Authorization = `Baber ${token}`
        }
    
        return config;
    });
    apiInstance.interceptors.response.use(
        (res) => res,
        (err) => {
            console.error("API Error: ", err?.response?.data || "Error in global handle !");
            return Promise.reject(err);
        }
    )
}

// add interceptors config
interceptorsConfig(SPRING_BOOT_API);


export {API, SPRING_BOOT_API};