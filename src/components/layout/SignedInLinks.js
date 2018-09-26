import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink className="btn btn-floating grey lighten-2" to="/">SH</NavLink></li>
        </ul>
    );
};

export default SignedInLink;
