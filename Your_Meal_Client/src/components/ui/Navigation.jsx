import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useState, useEffect } from "react";

import Notification from './Notification';
import NavigatorSetter from '../ NavigatorSetter'
import Button from "./Button";

const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const { isAuthenticated } = useSelector((state) => state.auth);


    useEffect(() => {
        if (isAuthenticated) {
            setShowNotification(true);
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isAuthenticated, navigate]);

    const handleCloseNotification = () => {
        setShowNotification(false);
    };
    const handleLogout = () => {
        dispatch(authActions.logout());
        navigate('/')
    }


    return (
        
        <header className="nav-header">
            <NavigatorSetter/>
            {showNotification && (
                <Notification 
                message={"Welcome to YOURMEAL ."} 
                type="success" 
                onClose={handleCloseNotification} 
                />
            )}
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <h1 className="text-2xl font-bold">YOUR MEAL .</h1>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav text-xl">
                    <ul>
                        <li className=""><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                        <li className=""><NavLink to="/yourMeal" className={({ isActive }) => (isActive ? 'active' : '')}>Your Meal</NavLink></li>
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
                        <li className="mobile-auth">
                            <Link className="mobile-login-btn" to="/auth?login">Login</Link>
                        </li>
                    </ul>
                </div>

                <div className="auth-button">
                    {!isAuthenticated &&
                        <Link to="/auth?login">
                            <Button classes="login-btn">
                                Login / Signup
                            </Button>
                        </Link>
                    }
                    {isAuthenticated && <Button onClick={handleLogout} classes="login-btn">Logout</Button>}
                </div>
            </div>
        </header>
    )
}

export default Navigation