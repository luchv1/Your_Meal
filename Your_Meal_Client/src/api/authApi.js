import {SPRING_BOOT_API} from "../utils/axiosInstance";

export const sendLoginForm = async (email, password) => {
    const response = await SPRING_BOOT_API.post("/auth/login", {email: email, password: password});
    return response.data;
}

export const sendSignupForm = async (email) => {
    const response = await SPRING_BOOT_API.post("/auth/signup", email);
    return response.data;
}