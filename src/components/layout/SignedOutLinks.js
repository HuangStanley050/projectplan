import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/signup">SignUp</NavLink></li>
            <li><NavLink to="/signin">Log In</NavLink></li>
        </ul>
    );
};

export default SignedOutLink;
