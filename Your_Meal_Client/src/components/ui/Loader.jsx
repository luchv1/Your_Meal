import React from "react";
import { useSelector } from "react-redux";
import "../../styles/loader.css"

const Loader = () => {
    const {isLoading} = useSelector((state) => state.loading);
    if (!isLoading ) return null;

    return (
        <div className="loader-overlay">
            <div className="loader"></div>
        </div>
    )
};

export default Loader;
