import React from "react";
import "../../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-copy">&copy; {new Date().getFullYear()} YOUR MEAL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
