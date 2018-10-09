import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLink from "./SignedOutLinks";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps)(Navbar);
