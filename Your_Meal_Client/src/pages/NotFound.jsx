import React from "react";
import { Link } from "react-router-dom";
import "../styles/errorpage.css";

const NotFound = () => {
    return (
        <div className="error-page">
            <div className="error-box">
                <h1>Error !</h1>
                <p>Not found !</p>
                <Link to="/" className="home-link">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
