import { useActionState, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import Button from "./Button";
import { validateEmail } from "../../utils/validate"
import { postSignupForm } from "../../store/authSlice";
import { startLoading, endLoading } from "../../store/loadingSlice";

const SignupForm = () => {
    const [errorValidate, setErrorValidate] = useState("");
    const [authData, setAuthData] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitForm = async (prevFormData, formData) => {
        const email = formData.get("email");
        const validateEmailContent = validateEmail(email);
        if (validateEmailContent !== "Email is valid") {
            setErrorValidate(validateEmailContent);
            return {error : validateEmailContent}
        } else {
            setErrorValidate("");
        }
        // pass validate
        try {
            dispatch(startLoading());
            dispatch(postSignupForm(email));
            navigate("/auth?auth=Login");
            dispatch(endLoading());
            return { error: null }
        } catch (error) {
            return { error: error.message || "Signup failed" };
        }
    }

    const [ formState, formAction, pending ] = useActionState(handleSubmitForm, { error : null});
    return (
        <div className="form-container">
            <div>
                <h1>Sign Up</h1>
                <p>Create an account to save your favorite recipes</p>
                <p className="input-error-message">It will automatically register with the password: ABC123 </p>
            </div>
            <form action={formAction}>
                <Input 
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    error={errorValidate || formState.error}
                />
                <Button type="submit" classes="seconds-button mt5 w100">Signup</Button>
            </form>
        </div>
    )
}

export default SignupForm;
