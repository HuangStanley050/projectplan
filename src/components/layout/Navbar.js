import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLink from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
    //console.log(props);
    return (
        <nav>
            <div className="nav-wrapper blue darken-2">
                <Link to="/" className="brand-logo">Project Plan</Link>
                {props.auth?<SignedInLink initials={props.initials}/>:null}
                {!props.auth?<SignedOutLink/>:null}
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    //console.log(state);
    let initials = null;
    if (state.firebase.profile) {
        initials = state.firebase.profile.initials;
    }
    return {
        auth: state.auth.authStatus,
        initials: initials

    };
};

export default connect(mapStateToProps)(Navbar);
