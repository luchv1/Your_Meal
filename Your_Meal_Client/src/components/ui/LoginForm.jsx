import { useState, useActionState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import { validateEmail } from "../../utils/validate";
import { postLoginForm } from "../../store/authSlice";
import Input from "./Input";
import Button from "./Button";
import { startLoading, endLoading } from "../../store/loadingSlice";

const LoginForm = () => {
    const [errorValidateEmail, setErrorValidateEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

    const handleSubmitForm = async (prevFormData, formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const validateEmailContent = validateEmail(email);

        if (validateEmailContent !== "Email is valid") {
            setErrorValidateEmail(validateEmailContent);
            return {error : validateEmailContent}
        } else {
            setErrorValidateEmail("");
        }

        // pass validate
        if (!errorValidateEmail) {
            try {
                dispatch(startLoading());
                dispatch(postLoginForm({email: email, password: password}));
                dispatch(endLoading());
                navigate("/");
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
                <p>Enter your email and password to access your account</p>
            </div>
            <form action={formAction}>
                <Input
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    error={errorValidateEmail}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    error={errorPassword}
                />
                <Button type="submit" classes="seconds-button mt5 w100">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;