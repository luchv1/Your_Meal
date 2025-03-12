import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error-container">
            <p>Something Wrong, please try again !</p>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default Error;