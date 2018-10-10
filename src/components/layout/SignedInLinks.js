import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";

const SignedInLink = (props) => {
    //console.log(props);
    return (
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a to="/" onClick={props.logout}>Log Out</a></li>
            <li><NavLink className="btn btn-floating grey lighten-2" to="/">SH</NavLink></li>
        </ul>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(SignedInLink);
