import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLink from "./SignedOutLinks";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-2">
                <Link to="/" className="brand-logo">Project Plan</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
            </nav>
    );
};

export default Navbar;
