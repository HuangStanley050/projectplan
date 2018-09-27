import React, { Component } from "react";

class SignIn extends Component {
    state = {}
    render() {
        return (
            <div className="container">
                <form onSubmit className="white">
                    <h4 className="grey-text">Sign In</h4>
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input onChange id="email" type="email" />
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input onChange id="password" type="password"/>
                    </div>
                    <div className="input-field">
                     <button className="btn grey z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default SignIn;
