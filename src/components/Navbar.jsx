import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <p>
                <Link to="/">Home</Link> | <Link to="/form">Form</Link> |{" "}
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Navbar;
