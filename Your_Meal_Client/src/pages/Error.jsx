import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/errorpage.css";

const Error = () => {
    const location = useLocation();
    const { errorType, errorMessage, errorDetails } = location.state || {};
    return (
        <div className="error-page">
            <div className="error-box">
                <h2>{errorType || 'UNKNOWN_ERROR'}</h2>
                <br />
                <p>{errorMessage || 'An unknown error occurred'}</p>
                <p>{errorDetails || ''}</p>
                <Link to="/" className="home-link">Go Home</Link>
            </div>
        </div>
    );
};

export default Error;
