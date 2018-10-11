import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/authActions";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        //console.log(this.state);
    }
    submitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.signup(this.state.email, this.state.password);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h4 className="grey-text">Sign Up</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input onChange={this.inputHandler} id="email" type="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input onChange={this.inputHandler} id="password" type="password"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <br/>
                        <input onChange={this.inputHandler} id="lastName" type="text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <br/>
                        <input onChange={this.inputHandler} id="firstName" type="text" />
                    </div>
                    <div className="input-field">
                     <button className="btn waves-effect waves-light grey z-depth-0">Sign Up!</button>
                    </div>
                </form>
            </div>
        );

    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: (email, password) => dispatch(actions.signup(email, password))
    };
};

export default connect(null, mapDispatchToProps)(SignUp);
