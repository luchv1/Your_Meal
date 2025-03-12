import Input from '../components/ui/Input.jsx'
import Button from '../components/ui/Button.jsx';

const Auth = () => {
    
    return (
        <div className="auth-container">
            <div className="container">
                <h1>Login</h1>
                <p>Enter your email and password to access your account</p>
                <Input label="Email" type="email" placeholder="Enter your email" />
                <Input label="Password" type="password" />
                <Button classes="seconds-button">Login</Button>
            </div>
        </div>
    )
}

export default Auth;