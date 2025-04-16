import {SPRING_BOOT_API} from "../utils/axiosInstance";

export const sendLoginForm = async (email, password) => {
    const response = await SPRING_BOOT_API.post("/user/login", {email: email, password: password});
    return response.data;
}

export const sendSignupForm = async (email) => {
    const response = await SPRING_BOOT_API.post("/user/register", {email: email});
    return response.data;
}