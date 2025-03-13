import Input from "./Input";
import Button from "./Button";
import { Form } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="form-container"> 
            <div>
                <h1>Login</h1>
                <p>Enter your email and password to access your account</p>
            </div>
            <form>
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="Password" type="password" />
                <Button type="submit" classes="seconds-button mt5 w100">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm;