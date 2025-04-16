import axios from "axios";
import { navigate } from './navigation';

const foodAPI = import.meta.env.VITE_FOOD_SERVER_API_URL;
const springBootAPI = import.meta.env.VITE_SPRING_BOOT_SERVER;

const API = axios.create({
    baseURL: foodAPI,
    headers: {
        "Content-Type": "application/json",
    },
});

const SPRING_BOOT_API = axios.create({
    baseURL: springBootAPI,
    headers: {
        "Content-Type": "application/json",
    },
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
        (response) => response,
        (error) => {
            // Map the error to a more specific type
            let errorType = 'UNKNOWN_ERROR';
            let errorMessage = 'An unknown error occurred';

            if (error.message === 'Network Error') {
                errorType = 'NETWORK_ERROR';
                errorMessage = 'Unable to connect to the server';
            } else if (error.response) {
                // The server responded with a status code outside of 2xx
                const status = error.response.status;

                if (status === 500) {
                    errorType = 'SERVER_ERROR';
                    errorMessage = 'Server encountered an error';
                } else if (status === 401 || status === 403) {
                    errorType = 'AUTH_ERROR';
                    errorMessage = 'Authentication failed';
                } else if (status === 404) {
                    errorType = 'NOT_FOUND';
                    errorMessage = 'Resource not found';
                } else {
                    errorType = `HTTP_ERROR_${status}`;
                    errorMessage = `Server responded with status ${status}`;
                }
            } else {
                errorType = 'SERVER_CONNECTION_ERROR';
                errorMessage = 'Failed to connect to server';
            }

            // If navigate function is available, redirect to error page
            navigate('/error', {
                        errorType,
                        errorMessage,
                        errorDetails: error.response?.data || error.message
                    });

            // Still reject the promise so calling code can handle it if needed
            return Promise.reject({
                type: errorType,
                message: errorMessage,
                details: error.response?.data || error.message,
                originalError: error
            });
        }
    )
}

// add interceptors config
interceptorsConfig(SPRING_BOOT_API);
export { API, SPRING_BOOT_API };