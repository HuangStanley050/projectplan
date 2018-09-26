import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLink = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">SignUp</NavLink></li>
            <li><NavLink to="/">Log In</NavLink></li>
        </ul>
    );
};

export default SignedOutLink;
