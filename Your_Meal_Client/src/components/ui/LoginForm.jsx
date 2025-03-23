import { useState, useActionState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { validateEmail } from "../../utils/validate";
import { postLoginForm } from "../../store/authSlice";
import Input from "./Input";
import Button from "./Button";
import { startLoading, endLoading } from "../../store/loadingSlice";

const LoginForm = () => {
    const [errorValidateEmail, setErrorValidateEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const dispatch = useDispatch();
    const { data, isLoading, error } = useSelector((state) => state.auth);


    const handleSubmitForm = async (prevFormData, formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const validateEmailContent = validateEmail(email);

        if (validateEmailContent != "Email is valid") {
            setErrorValidateEmail(validateEmailContent);
            return {error : validateEmailContent}
        } else {
            setErrorValidateEmail("");
        }

        if (!password || password.length < 3) {
            setErrorPassword("Password must be more 3 characters !");
            return {error : "Password must be more 3 characters !"}
        } else {
            setErrorPassword("");
        }
        // pass validate
        if (!errorPassword && !errorValidateEmail) {
            try {
                dispatch(startLoading());
                dispatch(postLoginForm({email: email, password: password}));
                dispatch(endLoading());
                return { error: null }
            } catch (error) {
                return { error: error.message || "login fail" };

            }
        }


    }

    const [ formState, formAction, pending ] = useActionState(handleSubmitForm, { error: null});
    return (
        <div className="form-container"> 
            <div>
                <h1>Login</h1>
                <p>Enter your email and password to access your account</p>
            </div>
            <form action={formAction}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    error={errorValidateEmail}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    error={errorPassword}
                />
                <Button type="submit" classes="seconds-button mt5 w100">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;