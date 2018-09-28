import React, { Component } from "react";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        // console.log(this.state);
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h4 className="grey-text">Sign In</h4>
                    <div className="input-field">
                        <label for="email">Email</label>
                        <br/>
                        <input onChange={this.inputHandler} id="email" type="email" />
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <br/>
                        <input onChange={this.inputHandler} id="password" type="password"/>
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
