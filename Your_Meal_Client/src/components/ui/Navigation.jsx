import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Navigation = () => {
    return (
        <header className="nav-header">

            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <h1>YOUR MEAL .</h1>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/yourMeal">Your Meal</Link></li>
                        <li><Link to="/category">Category</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button  */}
                <button className="mobile-menu-btn">
                    <Menu size={24} />
                </button>

                <div className="mobile-nav">
                    <ul>
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/yourMeal">Your Meal</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li className="mobile-auth">
                            <Link className="mobile-login-btn" to="/auth?login">Login</Link>
                        </li>
                    </ul>
                </div>

                <div className="auth-button">
                    <Link to="/auth?login">
                        <Button classes="login-btn">Login / Signup</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navigation