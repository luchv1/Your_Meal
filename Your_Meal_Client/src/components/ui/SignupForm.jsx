import Input from "./Input";
import Button from "./Button";

const SignupForm = () =>{
    return (
        <div className="form-container">
            <div>
                <h1>Sign Up</h1>
                <p>Create an account to save your favorite recipes</p>
            </div>
            <form>
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Button type="submit" classes="seconds-button mt5 w100">Signup</Button>
                <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
            </form>
        </div>
    )
}

export default SignupForm;
