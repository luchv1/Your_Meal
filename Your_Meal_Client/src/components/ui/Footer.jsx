import React from "react";
import "../../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">YOUR MEAL.</h2>
                <p className="footer-text">Discover delicious recipes and explore new flavors every day.</p>

                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <p className="footer-copy">&copy; {new Date().getFullYear()} YOUR MEAL. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
